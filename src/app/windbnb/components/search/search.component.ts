import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stays } from '../../interfaces/stays.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  locationOrGuest: string = '';
  countries: string[] = [];
  city: string = 'Helsinki';
  numberPeople: number = 0;

  @Input() allStays: Stays[] = [];
  @Output() onData: EventEmitter<any> = new EventEmitter();

  setLocationOrGuest(query: string) {
    this.locationOrGuest = query;
    this.allStays.forEach(item => {
      if (!this.countries.includes(item.city!)) this.countries.push(item.city!);
    })
  }

  selectCity(event: string) {
    this.city = event;
  }

  totalPeople(event: number) {
    this.numberPeople = event;
  }

  searchStays() {
    this.onData.emit({ city: this.city, beds: this.numberPeople });
  }

}
