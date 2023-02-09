import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleaguesPage } from './colleagues.page';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ColleaguesPage
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ColleaguesModule { }
