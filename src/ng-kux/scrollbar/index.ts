import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KuxScrollbarComponent, ScrollbarContent, ScrollBarY, ScrollBarX } from './scrollbar.component';
import { KuxScrollHelper } from './helper'
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [KuxScrollHelper],
  declarations: [
    KuxScrollbarComponent, ScrollbarContent, ScrollBarY, ScrollBarX
  ],
  exports: [
    KuxScrollbarComponent
  ]
})
export class KuxScrollBarModule { }