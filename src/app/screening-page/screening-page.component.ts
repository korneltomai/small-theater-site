import { Component, Input } from '@angular/core';
import { Screening } from '../screening';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screening-page',
  standalone: true,
  imports: [],
  templateUrl: './screening-page.component.html',
  styleUrl: './screening-page.component.scss'
})
export class ScreeningPageComponent {
  screening: Screening = {
    id: 0,
    price: 0,
    date: '',
    seats: []
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe(({ screening }) => {
      if (!screening) 
        this.router.navigate(['whats-on']);
      else
        this.screening = screening; 
    });

  }
}
