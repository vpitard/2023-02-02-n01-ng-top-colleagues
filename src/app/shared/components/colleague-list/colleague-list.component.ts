import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] = [
    {
      pseudo: "Jean",
      score: 100,
      photo: "https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
      pseudo: "Boris",
      score: -500,
      photo: "https://randomuser.me/api/portraits/men/12.jpg"
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
      pseudo: "Boris",
      score: -500,
      photo: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      pseudo: "Anne",
      score: 600,
      photo: "https://randomuser.me/api/portraits/women/80.jpg"
    },
    {
      pseudo: "Boris",
      score: -500,
      photo: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      pseudo: "Anne",
      score: 600,
      photo: "https://randomuser.me/api/portraits/women/80.jpg"
    }
    ]

}
