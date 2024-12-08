import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlarmclockModule } from './alarmclock/alarmclock.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlarmclockModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  city = 'San Francisco';
}
