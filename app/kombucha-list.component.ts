import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'kombucha-list',
  template: `
  <h3>Filter by flavor</h3>
  <select (change)="onChange($event.target.value)">
     <option value="strawberry">Strawberry</option>
     <option value="ginger">Ginger</option>
     <option value="lemon">Lemon</option>
     <option value="allFlavors" selected="selected">All Flavors</option>
   </select>

   <h3>View our Kombucha Options</h3>
  <div *ngFor="let currentKombucha of childKombuchaList | flavorness:filterByDesiredFlavor">
    <div class="kombuchaDivs">
      <h3 (click)="currentKombucha.thisKombucha = !currentKombucha.thisKombucha"  [class]="priceColor(currentKombucha)" >{{currentKombucha.name}}</h3>
      <div *ngIf="currentKombucha.thisKombucha">
        <p>Brand: {{currentKombucha.brand}}</p>
        <p>Price: $ {{(currentKombucha.price).toFixed(2)}}</p>
        <p>Flavor: {{currentKombucha.flavor}}</p>
        <p>Pint: {{currentKombucha.pint}}</p>
        <button class="btn btn-primary"(click)="currentKombucha.chooseToEditKombucha = !currentKombucha.chooseToEditKombucha" (click)="editButtonClicked(currentKombucha)">Edit</button>
        <button class="btn btn-success" (click)="sellPint(currentKombucha)">Sell Pint</button>
        <button class="btn btn-danger" (click)="pintOnSale(currentKombucha)">Discount</button>
        <button *ngIf="currentKombucha.pint <=120"(click)="restock(currentKombucha)" class="btn btn-info">Restock</button>
      </div>
    </div>

  </div>
  `
})

export class KombuchaListComponent {
  @Input() childKombuchaList: Kombucha[];
  @Output() clickSender = new EventEmitter();

  filterByDesiredFlavor: string = "allFlavors";

  editButtonClicked(kombuchaToEdit: Kombucha) {
    this.clickSender.emit(kombuchaToEdit);
  }

  sellPint(clickedKombucha) {
    clickedKombucha.pint = clickedKombucha.pint - 1;
  }

  pintOnSale(clickedKombucha) {
    clickedKombucha.price = (clickedKombucha.price * .80);
  }

  restock(clickedKombucha) {
    clickedKombucha.pint = 124;
  }

  onChange(optionFromMenu) {
    this.filterByDesiredFlavor = optionFromMenu;
  }

  priceColor(currentKombucha){
  if (currentKombucha.price >= 8){
    return "text-warning"
  } else if (currentKombucha.price <= 4){
    return "text-success";
  } else {
    return "text-info";
  }
}


}
