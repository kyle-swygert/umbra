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
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
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

export class TreeNode<T> {


  // for a folder, the value will be empty and the child will not bw null. 
  // for a file, the value will be populated, and will not have a child. 


  private value: Data; 
  private backward: TreeNode<T>;
  private forward: TreeNode<T>;
  private child: TreeNode<T>;


  constructor( newValue: Data, newBackward: TreeNode<T>, newForward: TreeNode<T>, newChild: TreeNode<T>) {

    this.value = newValue;
    this.backward = newBackward;
    this.forward = newForward;
    this.child = newChild;    

  }


  // methods for the type. 
 
  // setters and getters
  public set setBackward( newBackward: TreeNode<T>) {
    this.backward = newBackward;
  }
  
  public get getBackward() : TreeNode<T> {
    return this.backward;
  }
  
  public set setForward( newForward: TreeNode<T>) {
    this.forward = newForward;
  }
  
  public get getForward() : TreeNode<T> {
    return this.forward;
  }
  
  public set setChild( newChild: TreeNode<T>) {
    this.child = newChild;
  }

  public get getChild() : TreeNode<T> {
    return this.child;
  }
  
  public set setValue( newValue: Data) {
    this.value = newValue;
  }
  
  public get getValue() : Data {
    return this.value;
  }
  
  


}

export type LinkedList<T> = T & { next: LinkedList<T>, previous: LinkedList<T>};

export interface Data {

  type: string, 
  id: string,
  title: string;
  //content: LinkedList<Node>;

}