import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';

import { TreeBuilder } from './home.page'
import { HomePage } from './home.page';
import { Node } from './../app.module';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})

export class HomePageModule {

  constructor() { 

  }

  
}
