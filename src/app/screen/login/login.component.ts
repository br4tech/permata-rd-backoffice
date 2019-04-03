import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private oauthService: OAuthService) {
  }

  public login() {
      this.oauthService.initImplicitFlow("login");
  }

}
