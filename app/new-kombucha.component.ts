import { Component, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'new-kombucha',
  template: `
  <h1>New Kombucha</h1>
  <div>
    <label>Enter Name:</label>
    <input #newName>
    <label>Enter Brand:</label>
    <input #newBrand>
    <label>Enter Price:</label>
    <input #newPrice>
    <label>Enter Flavor:</label>
    <input #newFlavor>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newFlavor.value);" class="btn btn-success">Add</button>
  </div>
  `
})

export class NewKombuchaComponent{
  @Output() newKombuchaSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, flavor: string) {
    var newKombuchaToAdd: Kombucha = new Kombucha(name, brand, price, flavor);
    this.newKombuchaSender.emit(newKombuchaToAdd);
  }
}
