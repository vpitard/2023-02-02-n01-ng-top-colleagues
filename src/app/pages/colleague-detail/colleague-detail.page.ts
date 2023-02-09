import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ColleagueService} from "../../providers/colleague.service";
import {ColleagueComplete} from "../../models/colleague-complete";

@Component({
  selector: 'tc-colleague-detail',
  templateUrl: './colleague-detail.page.html',
  styleUrls: ['./colleague-detail.page.scss']
})
export class ColleagueDetailPage {

  colleague: ColleagueComplete = {
    pseudo: "",
    last: "",
    first: "",
    photo: "",
    score: 0
  };
  constructor(private activatedRoute: ActivatedRoute, private colleagueService: ColleagueService) {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        const pseudo = paramMap.get("pseudo")
        if(pseudo) {
          this.colleagueService.getColleagueComplete(pseudo).subscribe(colleague => this.colleague = colleague);
        }
      });
  }


}
