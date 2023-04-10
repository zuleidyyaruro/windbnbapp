import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  drawer!: boolean;

  openOrCloseDrawer(event: boolean) {
    this.drawer = event;
  }



}
