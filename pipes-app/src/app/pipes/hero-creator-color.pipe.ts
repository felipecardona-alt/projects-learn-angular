import { Creator, CreatorColorMap } from '../interfaces/hero';
import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreatorColorPipe',
})
export class HeroCreatorColorPipe implements PipeTransform {
  transform(value: Creator): string {
    return CreatorColorMap[value];
  }
}
