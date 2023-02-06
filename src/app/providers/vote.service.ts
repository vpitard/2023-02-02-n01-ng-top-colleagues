import {Injectable} from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes: Vote[] = [];

  subjectLike = new Subject<void>();
  subjectHate = new Subject<void>();

  list(): Vote[] {
    return this.votes;
  }

  add(vote: Vote) {
    this.votes.push(vote);
    this.incrementCounter(vote.vote);
  }

  subscribeLike(){
    return this.subjectLike.asObservable();
  }

  subscribeHate(){
    return this.subjectHate.asObservable();
  }

  incrementCounter(likeHate: LikeHate){
    if(likeHate==LikeHate.LIKE){
      this.subjectLike.next();
    }
    else{
      this.subjectHate.next();
    }
  }
}
