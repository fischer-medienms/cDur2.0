import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSettingsPage } from './list-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ListSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSettingsPageRoutingModule {}
