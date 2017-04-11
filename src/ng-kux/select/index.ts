import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KuxSelectComponent, kuxSelectBtn } from './kuxSelect.component.ts'

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA], //非表单元素加ngModel的profill
    imports: [CommonModule, FormsModule],
    declarations: [KuxSelectComponent, kuxSelectBtn],
    exports: [KuxSelectComponent] 
})
export class KuxSelectModule { }
export interface KuxSelectOpt {
    name: string
    value: any
}

