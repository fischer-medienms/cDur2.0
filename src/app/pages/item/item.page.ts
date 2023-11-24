import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { ListSettingsPage } from '../list-settings/list-settings.page';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
   listId = null;
   list = null;

   item ='';
   items: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private data: DatabaseService,
    private alertController: AlertController,
    private modalController: ModalController,
    private router: Router
  ) { }

 async ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('id');
    if (this.listId) {
      this.list = (await this.data.getListsInfo(this.listId)).data;
      console.log(this.list);
    }

    this.items = await this.data.getListItems(this.listId);
         


  }
      
async updateTitle() {
   const alert = await this.alertController.create({
    header: 'Name ändern',
      inputs: [
      {
        type: 'text',
        name: 'title',
        value: this.list.title,
      },
    ],
      buttons: [
      {
        text: 'Cancel',
        role: 'discard',
        cssClass: 'secondary',
      },
      {
        text: 'Update',
        handler: (data) => {
           this.list.title = data.title;
           this.data.updateList(this.list);
        }
      }
    ]
   });
   await alert.present();
    
  }

  async  editList() {
        const modal = await this.modalController.create({
        component: ListSettingsPage,
        componentProps: {
          listId: this.listId,
        },
        breakpoints: [0, 0.5],
        initialBreakpoint: 0.5,
      });
      await modal.present();
      const  { data } = await modal.onWillDismiss();
      if (data &&  data.action === 'delete') {
        this.data.deleteList(this.list);
        this.router.navigateByUrl('/tabs/captions');

      }

    } 

    async addItem (){
      const record = await this.data.addListItem(this.listId,this.item,this.items.length);

      if (record && record.data) {
        this.items.push(record.data);
        this.item ='';
      }
    }

    async deleteItem(item){
    await this.data.deleteItem(item.id);
      this.items = this.items.filter(obj => obj.id !== item.id);
     }

}
