import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'analog-clock',
  standalone: false,
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.scss',
})
export class AnalogClockComponent implements AfterViewInit {
  @ViewChild('hours') hours!: ElementRef;
  @ViewChild('minutes') minutes!: ElementRef;
  @ViewChild('seconds') seconds!: ElementRef;
  @ViewChild('alarm') alarm!: ElementRef;

  previousAngles = {
    seconds: 90,
    minutes: 90,
    hours: 90,
  };

  constructor() {}
  ngAfterViewInit(): void {
    this.animate();
  }

  animate() {
    const { hours, minutes, seconds } = this;
    const now = new Date();

    const secondsNumber = now.getSeconds();
    const secondsDegrees = this.rotatefix(
      (secondsNumber / 60) * 360 + 90,
      this.previousAngles.seconds
    );
    this.previousAngles.seconds = secondsDegrees;
    seconds.nativeElement.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesNumber = now.getMinutes();
    const minutesDegrees = this.rotatefix(
      (minutesNumber / 60) * 360 + (secondsNumber / 60) * 6 + 90,
      this.previousAngles.minutes
    );
    this.previousAngles.minutes = minutesDegrees;
    minutes.nativeElement.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursNumber = now.getHours();
    const hoursDegrees = this.rotatefix(
      (hoursNumber / 12) * 360 + (minutesNumber / 60) * 30 + 90,
      this.previousAngles.hours
    );
    this.previousAngles.hours = hoursDegrees;
    hours.nativeElement.style.transform = `rotate(${hoursDegrees}deg)`;

    window.requestAnimationFrame(() => this.animate());
  }

  // TODO: understand why this works
  rotatefix(to: number, from: number) {
    var delta = ((((to - from) % 360) + 540) % 360) - 180;
    return from + delta;
  }
}
