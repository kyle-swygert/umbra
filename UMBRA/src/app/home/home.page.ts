import { Component, ViewChild, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, IonInfiniteScroll } from '@ionic/angular';
import { namespaceHTML } from '@angular/core/src/render3';
import { RouteReuseStrategy } from '@angular/router';
import { Component } from '@angular/core';
import { TreeNode, Data } from '../app.module';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [];

  names = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5",
    "Title 6", "Title 7", "Title 8", "Title 9", "Title 10", "Title 11",
    "Title 12", "Title 13", "Title 14", "Title 15", "Title 16", "Title 17"];

  constructor(private viewSheet: ActionSheetController, private alertCtrl: AlertController) {
    for (let i = 0; i < this.names.length; i++) {
      this.items.push({
        name: this.names[i],
        content: "Content"
      });
    }
  }





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

export class VirtualScrollPageComponent {

}


export class TreeBuilder {


  public root: TreeNode<Data>;


  constructor() {

    // // initializing the data in the root node of the tree. 

    this.root = new TreeNode<Data>(null, null, null, null);

  }
  

  // methods for the tree. 

  public createNode(newID: string, newType: string, newTitle: string) {

    var testData: Data;// { id = '42',  type = 'folder', title = 'French Toast'  };
    testData.id = newID;
    testData.type = newType;
    testData.title = newTitle;

    //this.root.setValue( testData );


  }



  /**
   * testTree
   */
  public testTree() {
    // set sum sstuff and see if it works. 

    var testTree = new TreeBuilder();

    var testData: Data;// { id = '42',  type = 'folder', title = 'French Toast'  };
    testData.id = '42';
    testData.type = 'Folder';
    testData.title = 'French Toast';

    var testTreeNode = new TreeNode<Data>(testData, null, null, null);


    testTree.root.setValue(testData);
    //testTree.root.setValue()



  }

}