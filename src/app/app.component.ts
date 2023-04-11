import { Component, OnInit } from '@angular/core';
import * as  stays from '../assets/json/stays.json';
import { Stays } from './windbnb/interfaces/stays.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  drawer!: boolean;
  country: string = 'Helsinki'
  staysByCity: Stays[] = Array.from(stays);

  ngOnInit(): void {
    this.staysByCity = this.staysByCity.filter(item => item.city === this.country);
    console.log(this.staysByCity)
  }

  openOrCloseDrawer(event: boolean) {
    this.drawer = event;
  }



}
