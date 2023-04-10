import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainStaysComponent } from './components/main-stays/main-stays.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainStaysComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    MainStaysComponent
  ]
})
export class WindbnbModule { }
