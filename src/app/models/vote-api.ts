import {Colleague} from "./colleague";
import {LikeHate} from "./like-hate";

export interface VoteAPI {
  colleague: Colleague;
  like_hate: LikeHate;
  score: number;
  created_date: string;

}
