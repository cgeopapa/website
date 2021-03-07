import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMobile: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth < 750;
  }

  ngOnInit(): void {
  }

}
