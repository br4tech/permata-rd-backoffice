import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $('.list-group').on('show', function(e) {
      $(this).find('.collapse').removeClass('arrow-down').addClass('arrow-up');
      e.stopPropagation();
      });
      $('.list-group').on('hide', function(e) {
      $(this).find('.collapse').removeClass('arrow-up').addClass('arrow-down');
      e.stopPropagation();
  });
  }



}
