import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable(
  {providedIn: 'root'}
)
export class AuthService {
  private access_token: string | undefined;
  private user: Subject<User> = new Subject<User>();
  private isLogged: boolean | undefined;
  private headers: HttpHeaders | undefined;

  public getUser() {
    return this.user.asObservable();
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.init();
  }

  private init() {
    this.subscribeForAccessToken();
  }

  private subscribeForAccessToken(){
    this.route.queryParams.subscribe(params => {
      if (params[environment.ACCESS_TOKEN] != null) {
        this.access_token = params[environment.ACCESS_TOKEN];

        this.headers = new HttpHeaders({Authorization : 'Bearer ' + params[environment.ACCESS_TOKEN]});
        this.http.get<User>(environment.SPOTIFY_ME_URL, {headers: this.headers}).subscribe(userResp => {
          this.user.next({display_name: userResp.display_name, id: userResp.id});
          this.isLogged = true;
        });
      }
    });
  }
}
