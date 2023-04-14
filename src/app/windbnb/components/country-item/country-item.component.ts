import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent {

  @Input() countries: string[] = [];
  @Output() onCity: EventEmitter<string> = new EventEmitter();

  selectCity(item: string) {
    this.onCity.emit(item);
  }
}
