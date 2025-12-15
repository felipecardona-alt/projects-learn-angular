import { Creator } from '../interfaces/hero';
import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreador',
})
export class HeroCreadorPipe implements PipeTransform {
  transform(value: Creator): string {
    return Creator[value];
  }
}
