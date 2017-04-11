import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KuxSelectComponent, kuxSelectBtn } from './kuxSelect.component.ts'

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, FormsModule],
    declarations: [KuxSelectComponent, kuxSelectBtn],
    exports: [KuxSelectComponent]
})
export class KuxSelectModule { }