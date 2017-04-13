import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollbarComponent } from '../../ng-kux/scrollbar/scrollbar.component'
@Component({
  templateUrl: './scrollBar.component.html',
  styleUrls: ['./scrollBar.component.css']
})
export class ScrollBarComponent implements OnInit, AfterViewInit {
  public line: number[] = Array(50).fill(null).map((x, i) => i);
  public column = Array(49).fill(null).map((x, i) => i);
  @ViewChild(ScrollbarComponent) private scrollBox: ScrollbarComponent
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // let dx = 1, dy = 1;
    // setInterval(() => {
    //   this.scrollBox.scrollTop += dy;
    //   this.scrollBox.scrollLeft += dx;
    //   if (this.scrollBox.isScrollToBottom()) {
    //     dy = -1
    //   }
    //   if (this.scrollBox.scrollTop <= 0) {
    //     dy = 1;
    //   }
    //   if (this.scrollBox.isScrollToRight()) {
    //     dx = -1
    //   }
    //   if (this.scrollBox.scrollLeft <= 0) {
    //     dx = 1;
    //   }
    // }, 10)
  }
}