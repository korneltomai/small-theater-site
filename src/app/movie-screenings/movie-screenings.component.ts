import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-movie-screenings',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './movie-screenings.component.html',
  styleUrl: './movie-screenings.component.scss'
})
export class MovieScreeningsComponent {
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentDate: Date = new Date("2024/05/01");

  getFutureDay(dayAhead: number): number {
    const futureDay: number = this.currentDate.getDay() + dayAhead;
    return (this.currentDate.getDay() + dayAhead > 6) ? futureDay - 7 : futureDay;
  }
}
