import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'kombucha-list',
  template: `
  <div (click)="editButtonClicked(currentKombucha)" *ngFor="let currentKombucha of childKombuchaList">
    <h3 (click)="currentKombucha.thisKombucha = !currentKombucha.thisKombucha" [class]="priceColor(currentKombucha)">{{currentKombucha.name}}</h3>
    <div *ngIf="currentKombucha.thisKombucha">
      <p>Brand: {{currentKombucha.brand}}</p>
      <p>Price: {{currentKombucha.price}}</p>
      <p>Flavor: {{currentKombucha.flavor}}</p>
      <p>Pint: {{currentKombucha.pint}}</p>
      <button class="btn btn-primary"(click)="currentKombucha.chooseToEditKombucha = !currentKombucha.chooseToEditKombucha" (click)="editButtonClicked(currentKombucha)">Edit</button>
      <button class="btn btn-success" (click)="sellPint(currentKombucha)">Sell Pint</button>
      <button *ngIf="currentKombucha.pint <=120"(click)="restock(currentKombucha)" class="btn btn-info">Restock</button>
    </div>

    <div *ngIf="currentKombucha.chooseToEditKombucha">
      <h3>Edit Kombucha</h3>
      <label>Enter Kombucha Name</label>
      <input [(ngModel)]="currentKombucha.name" class="form-control">
      <label>Enter Kombucha Brand</label>
      <input [(ngModel)]="currentKombucha.brand" class="form-control">
      <label>Enter Kombucha Price</label>
      <input [(ngModel)]="currentKombucha.price" class="form-control">
      <label>Enter Kombucha Flavor</label>
      <input [(ngModel)]="currentKombucha.flavor" class="form-control">
      <button class="btn btn-warning" (click)="currentKombucha.chooseToEditKombucha = !currentKombucha.chooseToEditKombucha">Done</button>
    </div>
  </div>
  `
})

export class KombuchaListComponent {
  @Input() childKombuchaList: Kombucha[];
  @Output() clickSender = new EventEmitter();
  @Output() pintSold = new EventEmitter();

  editButtonClicked(kombuchaToEdit: Kombucha) {
    this.clickSender.emit(kombuchaToEdit);
  }

  sellPint(clickedKombucha) {
    clickedKombucha.pint = clickedKombucha.pint - 1;
  }

  restock(clickedKombucha) {
    clickedKombucha.pint = 124;
  }

  // sellPintButtonClicked(kombuchaToSell: Kombucha) {
  //   this.pintSold.emit(kombuchaToSell);
  // }

  priceColor(currentKombucha){
  if (currentKombucha.price >= 8){
    return "bg-danger"
  } else if (currentKombucha.price <= 4){
    return "bg-success";
  } else {
    return "bg-info";
  }
}



}
