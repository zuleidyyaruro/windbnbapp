import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainStaysComponent } from './components/main-stays/main-stays.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SearchComponent } from './components/search/search.component';
import { CountryItemComponent } from './components/country-item/country-item.component';
import { ButtonsGuestsComponent } from './components/buttons-guests/buttons-guests.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainStaysComponent,
    SearchComponent,
    CountryItemComponent,
    ButtonsGuestsComponent

  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent,
    MainStaysComponent,
    SearchComponent,
    CountryItemComponent
  ]
})
export class WindbnbModule { }
