import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KuxSelectComponent, kuxSelectBtn, KuXSelectOpt } from './kuxSelect.component.ts'

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, FormsModule],
    declarations: [KuxSelectComponent, kuxSelectBtn, KuXSelectOpt],
    exports: [KuxSelectComponent]
})
export class KuxSelectModule { }
kuxSelectBtn
export interface selectOpt {
    name: any,
    value: any
}