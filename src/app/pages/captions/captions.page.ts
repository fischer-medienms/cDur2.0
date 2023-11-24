import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-captions',
  templateUrl: './captions.page.html',
  styleUrls: ['./captions.page.scss'],
})
export class CaptionsPage implements OnInit {
  dates: any[];
  router: any;

  constructor(
    private authService: AuthService, 
    private data: DatabaseService,
    private alertController: AlertController
  ) { }

  async ionViewWillEnter() {
      this.dates = await this.data.getLists();
      console.log('Meine Listen: ',this.dates);
  }

  ngOnInit() {
  }

logout () {
  this.authService.signOut();
}

async addList(){
 const alert = await this.alertController.create({
  header: "Gib Deiner Liste einen Namen",
  inputs: [
    {
      type: 'text',
      name: 'title',
      placeholder: 'Liste',
    },
  ],
    buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
    },
    {
      text: 'Hinzufügen',
      handler: (data) => {
         this.startList(data.title);
      }
    }
  ]

 });
 await alert.present();

}

async startList(title) {
 const record = await this.data.startList(title);
 this.dates = await this.data.getLists();
 const newItem = this.dates.pop();
// this.router.navigateByUrl(`/tabs/lists/${newItem.lists.id}`);
}
}
