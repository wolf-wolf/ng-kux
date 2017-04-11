import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './scrollBar.routes';
import { ScrollBarComponent } from './scrollBar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScrollBarComponent]
})
export class ScrollBarModule { }