import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-settings',
  templateUrl: './list-settings.page.html',
  styleUrls: ['./list-settings.page.scss'],
})
export class ListSettingsPage implements OnInit {

  @Input( ) listId: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

deleteList() {
  this.modalController.dismiss({ action: 'delete'});
}

}
