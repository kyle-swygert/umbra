import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export type Container<T> = { value: T };

export type Connections = {

}

// export class TreeNode {


//   // for a folder, the value will be empty and the child will not bw null. 
//   // for a file, the value will be populated, and will not have a child. 


//   private value: Data; 
//   private backward?: TreeNode;
//   private forward?: TreeNode;
//   private child?: TreeNode;
//   private parent?: TreeNode;

//   constructor() {
//     // setting the forward to NULL since this is a new node


//   }


//   // methods for the type. 
 
//   // setters and getters
//   public set setBackward( newBackward: TreeNode) {
//     this.backward = newBackward;
//   }
  
//   public get getBackward() : TreeNode {
//     return this.backward;
//   }
  
//   public set setForward( newForward: TreeNode) {
//     this.forward = newForward;
//   }
  
//   public get getForward() : TreeNode {
//     return this.forward;
//   }
  
//   public set setChild( newChild: TreeNode) {
//     this.child = newChild;
//   }

//   public get getChild() : TreeNode {
//     return this.child;
//   }
  
//   public set setParent( newParent: TreeNode) {
//     this.parent = newParent;
//   }

//   public get getParent() : TreeNode {
//     return this.parent;
//   }

//   public set setValue( newValue: Data) {
//     this.value = newValue;
//   }
  
//   public get getValue() : Data {
//     return this.value;
//   }
  
  


// }


export interface Node {
  backward?: Node;
  forward?: Node;
  child?: Node;
  parent?: Node;
  type: string, 
  id: string,
  title: string;
}