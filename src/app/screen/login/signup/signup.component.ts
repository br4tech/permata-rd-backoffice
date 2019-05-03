import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login.component.scss']
})
export class SignUpComponent implements OnInit {
  TenantId : string;

  constructor(public service: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
   
    this.service.tenant().subscribe((f: any) => {      
        this.TenantId = f.tenant;
        console.log(this.TenantId);
    });

    this.service.register(this.TenantId).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Usuário criado com sucesso', 'Registro realizado.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('O E-mail já está sendo usado', 'Erro ao registrar');
                break;

              default:
                this.toastr.error(element.description, 'Erro ao registrar.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}