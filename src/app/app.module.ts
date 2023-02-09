import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import { AppRoutingModule } from './app-routing.module';
import {CreateColleagueReactiveModule} from "./pages/create-colleague-reactive/create-colleague-reactive.module";
import {ColleaguesModule} from "./pages/colleagues/colleagues.module";
import {ColleagueDetailModule} from "./pages/colleague-detail/colleague-detail.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      NgbModule,
      SharedModule,
      HttpClientModule,
      CreateColleagueModule,
      AppRoutingModule,
      CreateColleagueReactiveModule,
      ColleaguesModule,
      ColleagueDetailModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
