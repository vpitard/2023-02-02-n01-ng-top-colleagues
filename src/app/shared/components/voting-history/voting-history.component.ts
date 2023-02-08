import { Component } from '@angular/core';
import {VoteService} from "../../../providers/vote.service";
import {Vote} from "../../../models/vote";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private voteService: VoteService) {
    this.voteService.list().subscribe(voteApis => {
      voteApis.forEach( voteApi => this.votes.push(voteService.voteapiToVote(voteApi)))
    });
  }

  votes: Vote[] = [];
}
