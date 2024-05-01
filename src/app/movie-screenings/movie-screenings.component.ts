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

}
