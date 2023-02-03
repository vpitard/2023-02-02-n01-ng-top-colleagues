import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Output() eventLikeHate = new EventEmitter<LikeHate>();

  @Input() btnLikeDisable: boolean = false;
  @Input() btnHateDisable: boolean = false;

  clickLike(){
    this.eventLikeHate.emit(LikeHate.LIKE);
  }

  clickHate(){
    this.eventLikeHate.emit(LikeHate.HATE);
  }
}
