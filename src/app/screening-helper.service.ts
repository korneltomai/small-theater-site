import { Injectable } from '@angular/core';
import { Screening } from "./screening";

@Injectable({
  providedIn: 'root'
})
export class ScreeningHelperService {

  constructor() { }

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentDate: Date = new Date("2024-05-01, 16:00");

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

  // Filter for the screenings pipe that filters screenings for a specific day in the future
  screeningFilter = (screening: Screening, dayAhead: number): boolean => {
    let sDate = new Date(screening.date);
    return sDate.getDate() === this.getFutureDate(dayAhead).getDate();  
  }
}
