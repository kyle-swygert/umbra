import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {

  items = [];

  names = ["To Do", "Recipe", "Workout", "Bullet Journal"];


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
