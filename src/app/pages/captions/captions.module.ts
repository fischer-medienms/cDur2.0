import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptionsPageRoutingModule } from './captions-routing.module';

import { CaptionsPage } from './captions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptionsPageRoutingModule
  ],
  declarations: [CaptionsPage]
})
export class CaptionsPageModule {}
