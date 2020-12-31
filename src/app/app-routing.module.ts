import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tutorial1Component } from './Tutorials/tutorial1/tutorial1.component';

const routes: Routes = [
  { path: 'tutorial1', component: Tutorial1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
