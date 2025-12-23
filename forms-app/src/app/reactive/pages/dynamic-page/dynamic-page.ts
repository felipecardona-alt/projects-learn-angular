import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule, FormControl } from '@angular/forms';
import { FormUtils } from '../../../utils/forms-utils';

@Component({
  selector: 'dynamic-page',
  imports: [JsonPipe, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {
  private formBuilder = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.formBuilder.group({
    name: ['' , [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array(
      [
        ['Metal Gear', Validators.required],
        ['Hollow Knight: Silksong', Validators.required],
      ],
      [Validators.minLength(2)]),
  });

  newFavoriteGame = new FormControl('', Validators.required);

  addFavoriteGame() {
    if (this.newFavoriteGame.invalid) return;

    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push( this.formBuilder.control(newGame, Validators.required) );
    this.newFavoriteGame.reset();
  };

  removeFavoriteGame(index: number) {
    this.favoriteGames.removeAt(index);
  };

  onSubmit() {
    this.myForm.markAllAsTouched();
  };

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

}
