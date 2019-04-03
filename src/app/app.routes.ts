import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './screen/login/login.component';
import { UnauthorizedComponent } from './screen/unauthorized/unauthorized.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginCallbackComponent } from './screen/login/login-callback.component';

export const ROUTES: Routes = [    
    { path: '', redirectTo: 'login', pathMatch: 'full', },    
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login Page'
      }
    },    
    {
      path: 'login-callback',
      component: LoginCallbackComponent,
      data: {
        title: 'Login Page'
      }
    },
    { // -- Feature from this project
      path: 'unauthorized',
      component: UnauthorizedComponent,
      data: {
        title: 'Unauthorized Page'
      }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    providers: [AuthGuard],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }