import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagGroupPageRoutingModule } from './tag-group-routing.module';

import { TagGroupPage } from './tag-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagGroupPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TagGroupPage]
})
export class TagGroupPageModule {}
