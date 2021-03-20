import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMobile: boolean = false;
  public opened = false;
  public events: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 650;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.isMobile = window.innerWidth < 650;
  }
}
