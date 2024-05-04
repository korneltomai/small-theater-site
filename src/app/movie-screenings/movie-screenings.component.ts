import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Screening } from '../screening';
import { ScreeningPipe } from '../screenings.pipe';

@Component({
  selector: 'app-movie-screenings',
  standalone: true,
  imports: [NgFor, MatTabsModule, ScreeningPipe],
  templateUrl: './movie-screenings.component.html',
  styleUrl: './movie-screenings.component.scss'
})
export class MovieScreeningsComponent {
  @Input()
  screenings: Screening[] = [];
  
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentDate: Date = new Date("2024-05-01, 16:00");
  amountOfRepetetions = new Array(7);

  getFutureDate(dayAhead: number): Date {
    let futureDate = new Date(this.currentDate);
    futureDate.setDate(futureDate.getDate() + dayAhead);
    return futureDate;
  }

  getWeekday(index: number): string {
    if (index === 0)
      return "Today";
    return this.days[this.getFutureDate(index).getDay()];
  }

  screeningFilter(screening: Screening, dayAhead: number): boolean {
    let sDate = new Date(screening.date);
    return sDate.getDate() === this.getFutureDate(dayAhead).getDate();
  }
}
