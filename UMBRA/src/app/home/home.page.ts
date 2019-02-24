import { Node } from './../app.module';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController, IonInfiniteScroll } from '@ionic/angular';
import { namespaceHTML } from '@angular/core/src/render3';
import { RouteReuseStrategy } from '@angular/router';
import { findNode } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [];

  tree = new TreeBuilder();

  constructor(private viewSheet: ActionSheetController, private alertCtrl: AlertController) {

    this.items = this.collectChildren(this.tree.current);
    
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
        name: 'value',
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
          this.tree.createNode("D", data.value);
          location.reload();
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
        name: "value",
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
          console.log("New File Created!" + data.value);
          this.tree.createNode("F", data.value);
          location.reload();
          // call new blank item function, passing in the title (data)
        }
      }]
    });
    await newItemAlert.present();
  }


  async testTreeFunc() {
    var tree = this.testTree();
    var temp = tree;
    // this.findNode(temp, "2");
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
    if (tree == null){
      console.log("returning...");
      return;
    }

    this.preOrder(tree.child, id);
    this.preOrder(tree.forward, id);
    console.log("cur id: " + tree.id)


  }

  searchTree(tree: Node, id: string) {
    console.log("in search.");

    if (tree != null) {
      console.log("cur id = " + tree.id);
      if (tree.id == id) {
        console.log("FOUND!!!");
        return tree.id;
      } else {

        var foundNode = this.searchTree(tree.child, id);

        if (foundNode == null) {
          foundNode = this.searchTree(tree.forward, id);
        }
        return foundNode;
      }
    } else {
      console.log("not found yet");
      return null;
    }
  }

  findNode(tree: TreeBuilder, id: string) {
    console.log("entered findnode");
    var temp: Node = tree.root;
    // this.preOrder(temp, id);
    var test = this.searchTree(temp, id);
    console.log("test: " + test);
    if (test == null) {
      return null;
    } else {
      return test;
    }
  }

  collectChildren(cur: Node) {
    var children = [];
    var temp: Node = cur.child;
    while(temp != null){
      children.push(temp);
      temp = temp.forward;
    }
    return children;
  }
}

export class TreeBuilder {

  public root: Node;
  public current: Node;
  public node_counter: number;

  constructor() {

    // // initializing the data in the root node of the tree. 
    // since the tree is empty, all of root is null
    this.root = { type: "D", title: "Home", id: "0", backward: null, forward: null, parent: null, child: null };

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
      newNode = { forward: null, parent: this.current, backward: null, child: null, id: this.node_counter.toString(), title: newTitle, type: newType };
      this.current.child = newNode;

    }
    else {
      // if there is a child of current, then we are going to find the first child that has no sibling forward, and then set newnode to forward and it's backward to the temp node with no next sibling
      var temp = this.current.child;
      while (temp.forward != null) {
        temp = temp.forward;
      }
      newNode = { forward: null, parent: this.current, backward: temp, child: null, id: this.node_counter.toString(), title: newTitle, type: newType };
      temp.forward = newNode;

    }
    // child is always set to null for new nodes
    console.log("New node with ID: " + newNode.id + " of type: " + newNode.type);
    //set id and other strings to the given parameters
    this.node_counter++;

    // return the new created node
    return newNode;
  }

}

