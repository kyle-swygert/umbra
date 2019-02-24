import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private viewSheet: ActionSheetController, private alertCtrl: AlertController) { }

  async presentAddItemSheet() {

    const addItemSheet = await this.viewSheet.create({
      header: "Add New Item:",
      buttons: [
        {
          text: 'Load Blank',
          role: 'new_blank_item',
          icon: 'document',
          handler: () => {
            console.log("You Created a Blank Document!");
            this.presentNewFileAlert();
          }
        },
        {
          text: "Load from Template",
          role: "load_from_template",
          icon: "download",
          handler: () => {
            console.log("You Loaded A Template!");
            // 
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log("You Cancelled Creation!");
          }
        }]
    });
    await addItemSheet.present();
  }

  async presentNewFolderAlert() {
    const newFolderAlert = await this.alertCtrl.create({
      header: 'New Folder Name',
      inputs: [{
        name: 'Folder Name',
        placeholder: 'New Folder',
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'ok',
        handler: data => {
          console.log("New Folder Created!");
          // call new folder function, passing in title (data)
        }
      }]
    });
    await newFolderAlert.present();
  }

  async presentNewFileAlert() {
    const newItemAlert = await this.alertCtrl.create({
      header: "New Item Name",
      inputs: [{
        name: "Item Name",
        placeholder: "New Item",
      }],
      buttons: [{
        text: "Cancel",
        handler: data => {
          console.log("Cancel clicked");
        }
      }, {
        text: 'ok',
        handler: data => {
          console.log("New File Created!");
          // call new blank item function, passing in the title (data)
        }
      }]
    });
    await newItemAlert.present();
  }
}