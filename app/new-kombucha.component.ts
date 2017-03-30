import { Component, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'new-kombucha',
  template: `
  <h1>New Kombucha</h1>
  <div>
    <label>Name:</label>
    <input #newName class="form-control">
    <label>Brand:</label>
    <input #newBrand class="form-control">
    <label>Price:</label>
    <input #newPrice class="form-control">
    <label>Flavor:</label>
    <input #newFlavor class="form-control">
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
