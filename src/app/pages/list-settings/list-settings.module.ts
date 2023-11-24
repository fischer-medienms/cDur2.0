import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSettingsPageRoutingModule } from './list-settings-routing.module';

import { ListSettingsPage } from './list-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSettingsPageRoutingModule
  ],
  declarations: [ListSettingsPage]
})
export class ListSettingsPageModule {}
