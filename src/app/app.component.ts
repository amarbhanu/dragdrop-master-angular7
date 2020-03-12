import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}

  // list1 = [
  //   "Episode I - The Phantom Menace",
  //   "Episode II - Attack of the Clones",
  //   "Episode V - The Empire Strikes Back",
  //   "Episode IV - A New Hope",
  //   "Episode III - Revenge of the Sith",
  //   "Episode VI - Return of the Jedi",
  //   "Episode VII - The Force Awakens",
  //   "Episode VIII - The Last Jedi",
  //   "Episode IX - The Last W",
  //   "Episode X - Return of Alade",
  //   "Episode XI - Revenge",
  //   "Episode XII - Attack"
  // ];

  // list2 = [
  //   "Rigth side Episode I - The Phantom Menace",
  //   "Rigth side Episode II - Attack of the Clones",
  //   "Rigth side Episode V - The Empire Strikes Back",
  //   "Rigth side Episode IV - A New Hope",
  //   "Rigth side Episode III - Revenge of the Sith",
  //   "Rigth side Episode VI - Return of the Jedi",
  //   "Rigth side Episode VII - The Force Awakens",
  //   "Rigth side Episode VIII - The Last Jedi",
  //   "Rigth side Episode IX - The Last W"
  // ];

  list1 = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones"
  ];

  list2 = [
    "Rigth side Episode I - The Phantom Menace",
    "Rigth side Episode II - Attack of the Clones",
    "Rigth side Episode V - The Empire Strikes Back"
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log(
        JSON.stringify(event.previousContainer.data) + "previousContainer"
      );
      console.log(JSON.stringify(event.container.data) + "container");
      console.log(JSON.stringify(event.previousIndex) + "previousIndex");
      console.log(JSON.stringify(event.currentIndex) + "currentIndex");
    } else {
      moveItemInArray(this.list1, event.previousIndex, event.currentIndex);

      console.log(JSON.stringify(this.list1));
      console.log(JSON.stringify(event.previousIndex) + "*-*-*--*");
      console.log(JSON.stringify(event.currentIndex) + "--------------");
    }
  }
}
