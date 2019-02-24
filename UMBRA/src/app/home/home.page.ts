import { RouteReuseStrategy } from '@angular/router';
import { Component } from '@angular/core';
import { TreeNode, Data } from '../app.module';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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