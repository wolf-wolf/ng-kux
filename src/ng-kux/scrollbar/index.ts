import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarComponent, ScrollbarContent, ScrollBarY, ScrollBarX } from './scrollbar.component';
import { KuxScrollHelper } from './helper'
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [KuxScrollHelper],
  declarations: [
    ScrollbarComponent, ScrollbarContent, ScrollBarY, ScrollBarX
  ],
  exports: [
    ScrollbarComponent
  ]
})
export class KuxScrollBarModule { }