import { Component, Directive, Self, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, animate } from '@angular/core';
import { NgModel, ControlValueAccessor } from '@angular/forms';
import { selectOpt } from './index';
import { fadeInOut } from '../animate'
@Directive({
  selector: '[kux-select-btn]'
})
export class kuxSelectBtn {
  constructor(
    private btn: ElementRef
  ) {
  }
  focus() {
    this.btn.nativeElement.focus();
  }
}


@Component({
  selector: 'kux-select[ngModel]',
  animations: [fadeInOut],
  template:
  `
    <button kux-select-btn kux-dropdown [style.width]="width" class="kux-select-btn" (blur)="tryToClose()" (click)="open()">{{selected.name||placeholder}}</button>
    <kux-select-opt kux-dropdown-menu #kuxSelectOpt [@fadeInOut]="'in'" [opt]="options" [width]="optwdith" (oncheck)="select($event)" *ngIf="isOpen" (mouseenter)="setSelecting()" (mouseleave)="mouseOut()"></kux-select-opt>
  `,
  providers: [NgModel],
  styleUrls: ['./kuxSelect.component.css'],
  host: {
    'class': 'kux-select',
    'style': 'display:inline-block',
    '(valueChange)': 'onChange($event)'
  }
})
export class KuxSelectComponent implements OnInit {
  @Input() private options: selectOpt[];  //选项
  @Input() public width: string = '205px';  //btn宽度
  @Input() public optwdith: string = '205px';  //选项宽度
  @Input() placeholder: string; //你懂得
  @Output() private valueChange: EventEmitter<any> = new EventEmitter();
  private optionsMapping: any;  //选项mapping
  public selected: selectOpt;
  private value: any;
  public isOpen: boolean = false; //是否显示选项
  private selecting: boolean = false
  private onChange = (_: any) => { };
  private onTouched = () => { };
  @ViewChild(kuxSelectBtn) private btn: kuxSelectBtn
  constructor(
    @Self() private ngModel: NgModel,
    private el: ElementRef
  ) {
    this.selected = {
      name: null,
      value: null
    };
    ngModel.valueAccessor = this;
  }
  open() {
    this.isOpen = this.isOpen && this.selecting ? false : true;
  }
  tryToClose() {
    if (!this.selecting) {
      this.isOpen = false;
      this.selecting = false;
    }
  }
  setSelecting() {
    this.selecting = true;
    this.btn.focus();
  }
  mouseOut() {
    this.selecting = false;
  }
  select(opt: selectOpt) {
    if (this.value !== opt.value) {
      this.value = opt.value;
      this.selected = <selectOpt>this.optionsMapping[this.value] || { name: null, value: null };
      this.valueChange.emit(this.value);
    }
    this.selecting = false;
    this.isOpen = false;
  }
  ngOnInit() {
    this.optionsMapping = {};
    this.options.forEach((itm: selectOpt) => {
      this.optionsMapping[itm.value] = itm;
    });
    switch (this.optwdith) {
      case 'full':
        this.optwdith = this.width;
        break;
      case 'min':
      case 'auto':
        this.optwdith = 'auto';
        break;
      default:
    }
  }
  writeValue(v: any) {
    if (v !== this.value) {
      this.value = v;
      if (this.optionsMapping) {
        this.selected = <selectOpt>this.optionsMapping[v] || { name: null, value: null };
      }
    }
  }
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  onBlur() {
    this.onTouched();
  }
}


@Component({
  selector: 'kux-select-opt',
  template: `
        <ul class="kux-select-opt-box" [ngStyle]="style">
            <li *ngFor="let oneOpt of opt" (click)="select(oneOpt)">{{oneOpt.name}}</li>
        </ul>
    `,
  styles: [
    `   li{
                list-style: none;
                text-indent: 12px;
                padding-right:12px;
                height:38px;
                line-height:38px;
                cursor: pointer;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            li:hover{
                background-color:#f7f7f7;
            }
            .kux-select-opt-box {
                position: absolute;
                border-radius: 4px;
                background-color: #fff;
                box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.19);
                z-index: 1000;
                color: #333;
                font-size: 12px;
                padding: 4px 0;
                overflow: hidden;
                transition: height .3s;
                -webkit-transition: height .3s;
                -moz-transition: height .3s;
                -o-transition: height .3s;
                overflow-y: auto;
            }
        `
  ]
})
export class KuXSelectOpt implements OnInit {
  @Input() public opt: selectOpt[];
  @Input() public width: string;
  @Output() public oncheck: EventEmitter<KuXSelectOpt> = new EventEmitter<KuXSelectOpt>(false);
  public style: {} = {};
  constructor() {
    this.opt = [];
  }
  select(opt: KuXSelectOpt) {
    this.oncheck.emit(opt);
  }
  ngOnInit() {
    this.style = {
      width: this.width
    };
  }
}