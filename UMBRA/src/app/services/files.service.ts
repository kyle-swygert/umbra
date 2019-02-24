import { Injectable } from '@angular/core';
import { TreeBuilder } from '../home/home.page'

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  public tree: TreeBuilder = new TreeBuilder();
  public loaded: boolean = false;
  
  constructor(private storage: Storage) { 
  
  }
  
  load(): Promise<boolean> {
  
    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {
  
      // Get the notes that were saved into storage
      this.storage.get('tree').then((tree) => {

        // Only set this.notes to the returned value if there were values stored
        if(tree != null){
          this.tree = tree;
        }

        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);

      });

    });

  }

  save(): void {
    // Save the current array of notes to storage
    this.storage.set('tree', this.tree);
  }

  /*
  getNote(id): TreeBuilder {
    // Return the note that has an id matching the id passed in
    for () {

    }
  }
  */
/*
  createFile(title): void {

    // Create a unique id that is one larger than the current largest id
    var newNode = this.tree.createNode()

    this.save();

  }
  */
/*
  deleteNote(note): void {

    // Get the index in the array of the note that was passed in
    let index = this.notes.indexOf(note);

    // Delete that element of the array and resave the data
    if(index > -1){
      this.notes.splice(index, 1);
      this.save();
    }

  }
*/

}
  


