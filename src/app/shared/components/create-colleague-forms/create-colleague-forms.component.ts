import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueCompleteAPI} from "../../../models/colleague-complete-api";
import {ColleagueService} from "../../../providers/colleague.service";

class ColleagueModel {
  pseudo: string;
  last: string;
  first: string;
  photo: string;

  constructor() {
    this.pseudo = "";
    this.last = "";
    this.first = "";
    this.photo = "";
  }
}
@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private colleagueService: ColleagueService) {
  }
  colleagueModel = new ColleagueModel();

  submit() {
    let colleagueComplete: ColleagueCompleteAPI = {
      pseudo: this.colleagueModel.pseudo,
      last: this.colleagueModel.last,
      first: this.colleagueModel.first,
      photo: this.colleagueModel.photo
    }

    this.colleagueService;
    console.log(this.colleagueModel);
  }
}
