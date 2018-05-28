import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  public showMenu = false;

  sidenav() {
    this.showMenu = !this.showMenu;
    document.getElementById('nav').classList.toggle('sideNavExpand');
    if (this.showMenu === false) {
      document.getElementById('nav').style.width = '54px';
      // document.getElementById('nav').classList.add('sideNavNormal');
    } else {
      document.getElementById('nav').style.width = '200px';
      // document.getElementById('nav').classList.add('sideNavExpand');
    }
  }
}
