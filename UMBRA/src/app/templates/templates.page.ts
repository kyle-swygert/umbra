import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {

  items = [];

  names = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5",
    "Title 6", "Title 7", "Title 8", "Title 9", "Title 10", "Title 11",
    "Title 12", "Title 13", "Title 14", "Title 15", "Title 16", "Title 17"];


  constructor(private alertCtrl: AlertController) {
  }


  async AddTemplateAlert() {
    const AddTemplateAlert = await this.alertCtrl.create({
      header: 'New Template Name',
      inputs: [{
        name: 'Template Name',
        placeholder: 'New Template',
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'ok',
        handler: data => {
          console.log("New Template Created!");
          // call new folder function, passing in title (data)
        }
      }]
    });
    await AddTemplateAlert.present();
  }

  ngOnInit() {
    for (let i = 0; i < this.names.length; i++) {
      this.items.push({
        name: this.names[i],
        content: "Content"
      });
    }

    
  }

}
