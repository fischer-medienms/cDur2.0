import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagGroupPage } from './tag-group.page';

const routes: Routes = [
  {
    path: '',
    component: TagGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagGroupPageRoutingModule {}
