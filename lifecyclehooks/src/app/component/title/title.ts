import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'custom-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title {
  title = input.required<string>();
  title1 = input.required<string>();
  title2 = input.required<string>();
  title3 = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('NgOnChanges in Title component');
    const title = changes['title'];
    for (const propName in changes) {
      const change = changes[propName];
      const prev = change.previousValue;
      const curr = change.currentValue;
      console.log(`Title component - Property: ${propName}, Previous: ${prev}, Current: ${curr}`);
    }
  }
}
