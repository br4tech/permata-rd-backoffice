import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, AuthConfig } from 'angular-oauth2-oidc';

import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';

import { LayoutModule } from './layout/layout.module';
import { UnauthorizedComponent } from './screen/unauthorized/unauthorized.component';
import { LoginCallbackComponent } from './screen/login/login-callback.component';
import { RouteModule } from './screen/routes.module';

@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent,
    UnauthorizedComponent, 
    LoginCallbackComponent 
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    FormsModule,    
    RouteModule,  
    LayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
