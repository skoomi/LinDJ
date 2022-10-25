import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent implements OnInit {

  login_url: string = environment.nodejs_server_url + "/login";

  constructor() { }

  ngOnInit(): void {
  }

}
