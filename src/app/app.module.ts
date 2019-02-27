import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';

import { LayoutModule } from './layout/layout.module';
import { RouteModule } from './screen/routes.module';

@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    RouteModule,  
    LayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
