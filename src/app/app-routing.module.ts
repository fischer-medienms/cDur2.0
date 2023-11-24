import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule),
  
  }, 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    //canActivate: [AutoLoginGuard]
  },  
//  {
   // path: 'tabs',
  //  loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
 //   canActivate: [AuthGuard]
 // },
  {
    path: 'captions',
    loadChildren: () => import('./pages/captions/captions.module').then( m => m.CaptionsPageModule),
    canActivate: [AuthGuard]
  },

 // {
 //   path: 'tabs/captions/:id',
  //  loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule),
  //  canActivate: [AuthGuard]
 // },

  {
    path: 'tag-group',
    loadChildren: () => import('./pages/tag-group/tag-group.module').then( m => m.TagGroupPageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
