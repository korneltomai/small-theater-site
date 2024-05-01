import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScreeningsComponent } from './movie-screenings.component';

describe('MovieScreeningsComponent', () => {
  let component: MovieScreeningsComponent;
  let fixture: ComponentFixture<MovieScreeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieScreeningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieScreeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
