import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {CreateColleagueReactivePage} from "./pages/create-colleague-reactive/create-colleague-reactive.page";
import {ColleaguesPage} from "./pages/colleagues/colleagues.page";
import {ColleagueDetailPage} from "./pages/colleague-detail/colleague-detail.page";

const routes: Routes = [
  { path: 'form-template', component: CreateColleaguePage },
  { path: 'form-reactive', component: CreateColleagueReactivePage },
  { path: 'colleagues', component: ColleaguesPage },
  { path: 'colleagues/:pseudo', component: ColleagueDetailPage},
  { path: '', pathMatch: 'full', redirectTo: '/colleagues' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
