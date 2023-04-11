import { Component, Input } from '@angular/core';
import { Stays } from '../../interfaces/stays.interface';

@Component({
  selector: 'app-main-stays',
  templateUrl: './main-stays.component.html',
  styleUrls: ['./main-stays.component.css']
})
export class MainStaysComponent {

  @Input() staysByCity: Stays[] = [];

}
