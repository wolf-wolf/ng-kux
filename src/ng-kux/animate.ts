import {
    animate,
    trigger,
    state,
    keyframes,
    transition,
    style
} from '@angular/core';

export const fadeInOut = trigger('fadeInOut', [
    state('in', style({
        opacity: 1
    })),
    state('void', style({
        opacity: 0
    })),
    transition('void => *', [
        animate('0.2s', style({
            opacity: 1
        }))
    ]),
    transition('* => void', [
        animate('0.2s', style({
            opacity: 0
        }))
    ])
])