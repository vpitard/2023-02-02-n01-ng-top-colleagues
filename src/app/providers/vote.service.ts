import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes: Vote[] = [];
  list(): Vote[] {
    return this.votes;
  }

  add(vote: Vote) {
    this.votes.push(vote);
  }
}
