import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'flip-display',
  standalone: false,
  // animations: [
  //   trigger('flipdown', [
  //     state(
  //       'up',
  //       style({
  //         transformOrigin: 'bottom',
  //       })
  //     ),
  //     state(
  //       'down',
  //       style({
  //         transformOrigin: 'bottom',
  //         transform: 'rotateX(-180deg)',
  //       })
  //     ),
  //   ]),
  //   transition('up => down', [animate('0.5s')]),
  // ],
  templateUrl: './flip-display.component.html',
  styleUrl: './flip-display.component.scss',
})
export class FlipDisplayComponent {
  @ViewChild('flipper') flipper!: ElementRef<HTMLDivElement>;
  @Input() current: number = 0;
  @Input() angle: number = 0;
  next: number = 0;
  last: number = 0;
  flip: boolean = false;

  flipState: string = 'up'; // Initial state is 'up'

  constructor() {}
  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.flipper) {
      this.flipper.nativeElement.classList.remove('stay-down');
      this.flipper.nativeElement.classList.add('flip-down');
      this.last = this.next;
      this.next = this.current;
    }
  }

  animationEnd(event: AnimationEvent) {
    if (this.flipper) {
      this.flipper.nativeElement.classList.remove('flip-down');
      this.flipper.nativeElement.classList.add('stay-down');
    }
  }

  // animate() {
  //   const date = new Date();
  //   const firstNum = date.getSeconds() / 10;
  //   window.requestAnimationFrame(() => this.animate());
  // }
}
