import { Color, ColorMap } from '../interfaces/hero';
import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroTextColorPipe',
})
export class HeroTextColorPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value] || '#000000';
  }
}
