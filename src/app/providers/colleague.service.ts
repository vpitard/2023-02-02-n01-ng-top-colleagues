import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list(): Colleague[] {
    return [
      {
        pseudo: "Jean",
        score: 100,
        photo: "https://randomuser.me/api/portraits/men/70.jpg"
      },
      {
        pseudo: "Beatrice",
        score: -500,
        photo: "https://randomuser.me/api/portraits/women/57.jpg"
      },
      {
        pseudo: "Anne",
        score: 600,
        photo: "https://randomuser.me/api/portraits/women/80.jpg"
      },
      {
        pseudo: "Jean",
        score: 100,
        photo: "https://randomuser.me/api/portraits/men/70.jpg"
      },
      {
        pseudo: "Beatrice",
        score: -500,
        photo: "https://randomuser.me/api/portraits/women/57.jpg"
      },
      {
        pseudo: "Anne",
        score: 600,
        photo: "https://randomuser.me/api/portraits/women/80.jpg"
      }
    ];
  }

}
