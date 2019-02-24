import { Component, ViewChild, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, IonInfiniteScroll } from '@ionic/angular';
import { namespaceHTML } from '@angular/core/src/render3';
import { RouteReuseStrategy } from '@angular/router';
import { Node } from '../app.module';


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


  async testTreeFunc() {
    var tree = this.testTree();
    console.log(this.findNode(tree, "2"));

  }

  testTree() {
    // create the tester tree
    var testTree = new TreeBuilder();

    // add a new node
    var node1 = testTree.createNode("D", "Node1");
    var node2 = testTree.createNode("F", "Node2");
    var node3 = testTree.createNode("D", "Node3");
    testTree.current = node1;
    var node1_1 = testTree.createNode("F", "Node1_1");
    return testTree;
  }

  preOrder(tree: Node, id: string) {
    if (tree == null) return;
    if (tree.id == id) return tree.title;
    this.preOrder(tree.child, id);
    this.preOrder(tree.forward, id);
  }

  findNode(tree: TreeBuilder, id: string) {
    var temp: Node = tree.root;
    var test = this.preOrder(temp, id);
    if (test == null) {
      return null;
    } else {
      return test;
    }
  }
}

class TreeBuilder {

  public root: Node;
  public current: Node;
  public node_counter: number;

  constructor() {

    // // initializing the data in the root node of the tree. 
    // since the tree is empty, all of root is null
    this.root = {type: "D", title: "Home", id: "0", backward: null, forward: null, parent:null, child:null};

    // d is for directory type, the name of the directory is home, and it's the initial node so the id is set to 0

    // the current will start at the root, since it's the only created node
    this.current = this.root;

    this.node_counter = 0;

  }


  //   // methods for the tree. 

  public createNode(newType: string, newTitle: string) {
    var newNode: Node;
    
    // setting the backwards link
    if (this.current.child == null) {
      // if there's no child, set child to new and backwards to null
      this.current.child = newNode;
      newNode = {forward: null, parent: this.current, backward: null, child:null, id:this.node_counter.toString(), title:newTitle, type:newType};

    }
    else {
      // if there is a child of current, then we are going to find the first child that has no sibling forward, and then set newnode to forward and it's backward to the temp node with no next sibling
      var temp = this.current.child;
      while (temp.forward != null) {
        temp = temp.forward;
      }
      temp.forward = newNode;
      newNode = {forward: null, parent: this.current, backward: temp, child:null, id:this.node_counter.toString(), title:newTitle, type:newType};

    }
    // child is always set to null for new nodes

    //set id and other strings to the given parameters
    this.node_counter++;

    // return the new created node
    return newNode;
  }



}

