import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
  Renderer2,
} from '@angular/core';
import { ignoreElements, timer } from 'rxjs';

@Component({
  selector: 'digital-clock',
  standalone: false,
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.scss',
})
export class DigitalClockComponent {
  @ViewChild('midground') midground!: ElementRef<HTMLDivElement>;
  @ViewChild('background') background!: ElementRef<HTMLDivElement>;
  @ViewChild('foreground') foreground!: ElementRef<HTMLDivElement>;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    timer(0, 1000).subscribe(() => {
      const now = new Date();
      this.seconds = now.getSeconds();
      this.minutes = now.getMinutes();
      this.hours = now.getHours();
    });

    timer(0, 200).subscribe(() => {
      const { background, midground, foreground } = this;
      const select = [background, midground, foreground];

      // for (let i = 0; i < Math.floor(Math.random() * 2) + 1; i++) {
      const selected = select[Math.floor(Math.random() * 3)];
      selected.nativeElement.appendChild(this.getStar());
      // }
    });
  }

  getOnes(number: number) {
    if (number > 9) {
      return number % 10;
    } else return number;
  }
  getTens(number: number) {
    if (number < 10) {
      return 0;
    } else return Math.floor(number / 10);
  }

  getStar(): HTMLDivElement {
    const element: HTMLDivElement = this.renderer.createElement('div');
    element.style.top = `${Math.floor(Math.random() * 100) + 1 + '%'}`;
    element.style.width = `${Math.floor(Math.random() * 50) + 20 + 'px'}`;

    element.classList.add('star');
    return element;
  }

  animationEnd(event: AnimationEvent) {
    if ((event.target as HTMLElement).classList.contains('star')) {
      (event.target as HTMLElement)?.remove();
    }
  }
}
