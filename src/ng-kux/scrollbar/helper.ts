import { Injectable, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class KuxScrollHelper {
    public fn: any = {};
    private begin: number = 0;
    private target: number = 0;
    public scrollX: Subject<number> = new Subject();
    public dragX: Subject<boolean> = new Subject();
    public scrollY: Subject<number> = new Subject();
    public dragY: Subject<boolean> = new Subject();
    public renderer: Renderer2;
    constructor() {
        this.dragX.next(false);
        this.dragY.next(false);
        this.fn.begingMove = this.begingMove.bind(this);
    }
    begingMove(e: MouseEvent, target: number) {
        e.preventDefault();
        this.target = target;
        if (target === 0) {
            this.begin = e.pageY
            this.dragY.next(true);
        } else {
            this.begin = e.pageX;
            this.dragX.next(true);
        }
        let listeMoveBegin = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
            if (target === 0) {
                this.scrollY.next(e.pageY - this.begin)
                this.begin = e.pageY
            } else {
                this.scrollX.next(e.pageX - this.begin)
                this.begin = e.pageX
            }
        })
        let listeMoveEnd = this.renderer.listen('document', 'mouseup', () => {
            listeMoveBegin();
            listeMoveEnd();
            target === 0 ? this.dragY.next(false) : this.dragX.next(false);
        })
    }
}