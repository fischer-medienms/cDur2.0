import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptionsPage } from './captions.page';

const routes: Routes = [
  {
    path: '',
    component: CaptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptionsPageRoutingModule {}
