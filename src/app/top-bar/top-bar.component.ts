import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent {

  login_url: string = environment.NODE_SERVER_URL + '/login';
  displayName: string = '';
  isLogged: boolean = false;
  constructor(private auth: AuthService) {
    auth.getUser().subscribe(user => {
      this.displayName = user.display_name;
      this.isLogged = true;
    })
  }

}
