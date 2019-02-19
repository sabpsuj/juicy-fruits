import { Component } from '@angular/core';

@Component({
  selector: 'fruits-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class FruitsListComponent {
  fruits: string[] = ['banana', 'apple', 'orange', 'strawberry'];
  newFruitInput: string = '';
  fruitWasDeleted: boolean = false;

  addNewFruit() {
     this.fruits.push(this.newFruitInput);
     this.newFruitInput = '';
  }

  removeFruit(fruit: string) {
    const fruitPosition = this.fruits.indexOf(fruit);
    this.fruits.splice(fruitPosition, 1);
    this.fruitWasDeleted = true;
  }
}
