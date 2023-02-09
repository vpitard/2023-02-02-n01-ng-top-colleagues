import {Injectable} from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {ColleagueComplete} from "../models/colleague-complete";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) { }

  list(): Colleague[] {
    let colleaguesList: Colleague[] = [];

    this.http.get<Colleague[]>("https://dev.cleverapps.io/api/v2/colleagues")
      .subscribe({
        next: (colleagues: Colleague[]) => {
          colleagues.forEach(colleague => colleaguesList.push(colleague))
        },
        error:err => {
          console.log(err);
        }
      });

    return colleaguesList;
  }

  getColleagueComplete(pseudo: string): Observable<ColleagueComplete> {
    return this.http.get<ColleagueComplete>("https://dev.cleverapps.io/api/v2/colleagues/" + pseudo);
  }

}
