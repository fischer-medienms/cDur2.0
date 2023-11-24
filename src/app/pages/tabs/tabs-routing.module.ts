import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'captions',
        loadChildren: () => import('../captions/captions.module').then( m => m.CaptionsPageModule)
      },
      {
        path: 'tags',
        loadChildren: () => import('../tags/tags.module').then( m => m.TagsPageModule)
      },
      {
        path: '',
        redirectTo: 'captions',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'tag-group/:id',
    loadChildren: () => import('../tag-group/tag-group.module').then( m => m.TagGroupPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
