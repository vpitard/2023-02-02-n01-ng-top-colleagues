import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ColleagueCompleteAPI} from "../../../models/colleague-complete-api";

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {

  colleagueForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.colleagueForm = fb.group({
      pseudo: ['BVCZADZD', Validators.required],
      last: ['AAA', [Validators.required, Validators.minLength(2)]],
      first: ['', [Validators.required, Validators.minLength(2)]],
      photo: ['', [Validators.required]]
    });
  }

  get last() {
    return this.colleagueForm.get('last');
  }

  get first() {
    return this.colleagueForm.get('first');
  }

  submit(){
    console.log(this.colleagueForm.value);
  }
}
