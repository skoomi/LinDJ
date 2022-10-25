import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access_token: string | undefined;
  private user: any; // TODO: zrobić model usera spotify
  private isLogged: boolean | undefined;
  private headers: HttpHeaders | undefined;

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
        this.http.get(environment.SPOTIFY_ME_URL, {headers: this.headers}).subscribe(user => {
          this.user = user;
          this.isLogged = true;
        });
      }
    });
  }
}
