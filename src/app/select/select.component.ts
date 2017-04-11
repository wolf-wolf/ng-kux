import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  private sub= new Subject();
  public options: any[] = [
    {
      name: "选择下面一项",
      value: -1
    }, {
      name: "第一项",
      value: 0
    }, {
      name: "第二项",
      value: 1
    }, {
      name: "第三项",
      value: 2
    }, {
      name: "第四项",
      value: 3
    }, {
      name: "第五项",
      value: 4
    }
  ];
  public selected = -1;
  constructor() {
    this.sub.subscribe((data)=>{
        console.log(data)
    })
    this.sub.next(0);
    setInterval(()=>{
      this.sub.next(new Date())
    },2000)
  }

  ngOnInit() {
  }

}