import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-perfil',
  templateUrl: './dropdown-perfil.component.html',
  styleUrls: ['./dropdown-perfil.component.scss']
})
export class DropdownPerfilComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
