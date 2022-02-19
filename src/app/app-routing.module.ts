import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnersComponent } from './winners/winners.component';
import { MorewinnersComponent } from './morewinners/morewinners.component';


const routes: Routes = [
  { path: 'winners', component: WinnersComponent },
  { path: 'morewinners', component: MorewinnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
