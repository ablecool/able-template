import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbleIndexComponent } from "./able-index/able-index.component";

const routes: Routes = [
  {
    path: '',
    component: AbleIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
