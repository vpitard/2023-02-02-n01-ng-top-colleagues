import { Component } from '@angular/core';
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  nbLike: number = 0;
  nbHate: number = 0;

  constructor(private voteService: VoteService) {
    voteService.subscribeLike().subscribe(() => this.nbLike++);
    voteService.subscribeHate().subscribe(() => this.nbHate++);
  }
}
