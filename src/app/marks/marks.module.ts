import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksComponent } from './marks.component';



@NgModule({
  declarations: [MarksComponent],
  imports: [
    CommonModule
  ],
  exports: [MarksComponent]
})
export class MarksModule { }
