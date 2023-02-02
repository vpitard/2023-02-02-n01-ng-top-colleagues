import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() colleague: Colleague = {
    pseudo: "Jean",
    score: 150,
    photo: "https://randomuser.me/api/portraits/men/70.jpg"
  };

}
