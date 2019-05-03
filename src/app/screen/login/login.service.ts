import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register(TenantId ) {     

    var body = {
      ApplicationUser: {
        UserName: this.formModel.value.UserName,
        Email: this.formModel.value.Email,
        EmailConfirmed: true,
        TenantId: TenantId
      },
      User: {
        Password: this.formModel.value.Passwords.Password,
      },
      Perfil: 1
    };

    return this.http.post(environment.base_url_login + 'usuario', body);
  }

  login(formData) {
    return this.http.post(environment.base_url_login + 'login', formData);
  }

  tenant()
  {
   return this.http.post(environment.base_url_util + 'tenant', "");
  }
}