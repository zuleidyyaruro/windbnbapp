import { Component, OnInit } from '@angular/core';
import * as  stays from '../assets/json/stays.json';
import { Stays } from './windbnb/interfaces/stays.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  drawer: boolean = false;
  country: string = 'Helsinki'
  staysByCity: Stays[] = []
  allStays: Stays[] = Array.from(stays);

  ngOnInit(): void {
    this.staysByCity = this.allStays.filter(item => item.city === this.country);
    console.log(this.staysByCity)
  }

  openOrCloseDrawer(event: boolean) {
    this.drawer = event;
  }

  data(event: Stays) {
    this.drawer = false;
    this.staysByCity = this.allStays.filter(item => item.beds === event.beds || item.city === event.city);
  }



}
