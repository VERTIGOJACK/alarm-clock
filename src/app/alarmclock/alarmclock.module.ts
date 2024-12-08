import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { FlipDisplayComponent } from './flip-display/flip-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AnalogClockComponent,
    DigitalClockComponent,
    FlipDisplayComponent,
  ],
  exports: [AnalogClockComponent, DigitalClockComponent],
})
export class AlarmclockModule {}
