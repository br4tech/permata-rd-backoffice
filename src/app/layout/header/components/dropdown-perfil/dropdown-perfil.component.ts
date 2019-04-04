import { Component, OnInit } from '@angular/core';
import { OAuthService } from '../../../../../../node_modules/angular-oauth2-oidc';

@Component({
  selector: 'app-dropdown-perfil',
  templateUrl: './dropdown-perfil.component.html',
  styleUrls: ['./dropdown-perfil.component.scss']
})
export class DropdownPerfilComponent implements OnInit {

  constructor(private oauthService: OAuthService) {  }

  ngOnInit() {
  }

  public logout(){
    this.oauthService.logOut();
  }

}
