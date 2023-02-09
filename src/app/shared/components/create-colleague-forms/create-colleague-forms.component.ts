import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueComplete} from "../../../models/colleague-complete";
import {ColleagueService} from "../../../providers/colleague.service";

class ColleagueModel {
  pseudo: string;
  last: string;
  first: string;
  photo: string;

  score: number;

  constructor() {
    this.pseudo = "";
    this.last = "";
    this.first = "";
    this.photo = "";
    this.score = 0;
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
    let colleagueComplete: ColleagueComplete = {
      pseudo: this.colleagueModel.pseudo,
      last: this.colleagueModel.last,
      first: this.colleagueModel.first,
      photo: this.colleagueModel.photo,
      score: this.colleagueModel.score
    }

    this.colleagueService;
    console.log(colleagueComplete);
  }
}
