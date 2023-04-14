import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-guests',
  templateUrl: './buttons-guests.component.html',
  styleUrls: ['./buttons-guests.component.css']
})
export class ButtonsGuestsComponent {

  numberAdults: number = 0;
  numberChildren: number = 0;
  numberPeople: number = 0;

  @Output() onTotalPeople: EventEmitter<number> = new EventEmitter();


  counterAdults(query: string) {

    if (query === 'removeadult') {
      if (this.numberAdults > 0) {
        this.numberAdults -= 1;
      }
    } else if (query === 'addadult') {
      this.numberAdults += 1;
    }
    this.onTotalPeople.emit(this.numberChildren + this.numberAdults);
  }

  counterChildrens(query: string) {
    if (query === 'removechildren') {
      if (this.numberChildren > 0) {
        this.numberChildren -= 1;
      }
    } else if (query === 'addchildren') {
      this.numberChildren += 1;
    }
    this.onTotalPeople.emit(this.numberChildren + this.numberAdults);
  }


}
