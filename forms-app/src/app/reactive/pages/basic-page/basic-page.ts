import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html',
})
export class BasicPage {
  myForm = new FormGroup({
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
    inStorage: new FormControl<number>(0),
  });
}
