import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommitsComponent } from './list-commits/list-commits.component';

const routes: Routes = [
  { path: '', component: ListCommitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
