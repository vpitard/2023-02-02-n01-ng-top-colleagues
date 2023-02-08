import {Component, Input, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() colleague: Colleague = {
    pseudo: "Jean",
    score: 100,
    photo: "https://randomuser.me/api/portraits/men/70.jpg"
  };

  constructor(private voteService: VoteService) {
  }

  boundary = 1000;

  moreThan1000 = false;
  lessThan1000 = false;

  likeOrHate(likeHate: LikeHate){
    if(likeHate === LikeHate.LIKE){
      this.colleague.score+=100;
      this.checkBoundaries();
    }
    else if(likeHate === LikeHate.HATE){
      this.colleague.score-=100;
      this.checkBoundaries();
    }

    let vote = {
      colleague: this.colleague,
      vote: likeHate,
      score: this.colleague.score
    }

    this.voteService.add(vote)
  }

  checkBoundaries(){
    if(this.colleague.score>=this.boundary){
      this.moreThan1000 = true;
    }
    else if(this.lessThan1000){
      this.lessThan1000 = false;
    }
    else if(this.colleague.score<=-this.boundary){
      this.lessThan1000 = true;
    }
    else if(this.moreThan1000){
      this.moreThan1000 = false;
    }
  }
}
