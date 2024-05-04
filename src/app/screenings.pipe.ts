import { PipeTransform, Pipe } from '@angular/core';
import { Screening } from './screening';

@Pipe({
    name: 'screenings',
    standalone: true,
    pure: false
})
export class ScreeningPipe implements PipeTransform {
    transform(screenings: Screening[], dayAhead: number, callback: (screening: Screening, dayAhead: number) => boolean): any {
        if (!screenings || !callback) {
            return screenings;
        }
        return screenings.filter(screening => callback(screening, dayAhead));
    }
}