import { Node } from "./app.module";

export class TreeBuilder {

    public root: Node;
    public current: Node;
    public node_counter: number;

    constructor() {

        // // initializing the data in the root node of the tree. 
        // since the tree is empty, all of root is null
        var newNode: Node = {id:"0", title: "root", type: "D", parent: null, child: null, forward: null, backward: null};
        this.root = newNode;
        // d is for directory type, the name of the directory is home, and it's the initial node so the id is set to 0

        // the current will start at the root, since it's the only created node
        this.current = this.root;

        this.node_counter = 0;

    }


    //   // methods for the tree. 

    public createNode(newType: string, newTitle: string) {
        console.log("creating a node.");
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