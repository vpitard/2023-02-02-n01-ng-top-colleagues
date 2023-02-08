import {Injectable} from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Colleague} from "../models/colleague";
import {VoteAPI} from "../models/vote-api";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes: Vote[] = [];

  subjectLike = new Subject<void>();
  subjectHate = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  list(): Observable<VoteAPI[]> {
    return this.http.get<VoteAPI[]>("https://dev.cleverapps.io/api/v2/votes")
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

  voteapiToVote(voteApi: VoteAPI): Vote {
    let vote: Vote = new class implements Vote {
      colleague: Colleague = {
        pseudo: "xx",
        score: 0,
        photo: "xx"
      };
      score: number = 0;
      vote: LikeHate = LikeHate.LIKE;
    };

    vote.colleague = voteApi.colleague;
    vote.vote = voteApi.like_hate;
    vote.score = voteApi.score;

    return vote;
  }
}
