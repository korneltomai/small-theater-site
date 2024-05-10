import { Component, Input } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { Screening } from '../screening';
import { ScreeningPipe } from '../screenings.pipe';
import { RouterModule } from '@angular/router';
import { ScreeningHelperService } from '../screening-helper.service';

@Component({
  selector: 'app-movie-screenings',
  standalone: true,
  imports: [NgFor, MatTabsModule, MatButtonModule, ScreeningPipe, DatePipe, RouterModule],
  templateUrl: './movie-screenings.component.html',
  styleUrl: './movie-screenings.component.scss'
})
export class MovieScreeningsComponent {
  @Input() screenings: Screening[] = [];
  @Input() movieId: number = 0;
  
  amountOfRepetetions = new Array(7);

  constructor (public screeningHelper: ScreeningHelperService) {}
}
