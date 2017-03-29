import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha</h1>
    <div (click)="editKombucha(currentKombucha)" *ngFor="let currentKombucha of kombuchas">
      <h3 (click)="currentKombucha.thisKombucha = !currentKombucha.thisKombucha">{{currentKombucha.name}}</h3>
      <div *ngIf="currentKombucha.thisKombucha">
        <p>Brand: {{currentKombucha.brand}}</p>
        <p>Price: {{currentKombucha.price}}</p>
        <p>Flavor: {{currentKombucha.flavor}}</p>
        <p>Pint: {{currentKombucha.pint}}</p>
        <button (click)="currentKombucha.chooseToEditKombucha = !currentKombucha.chooseToEditKombucha">Edit</button>
      </div>

      <div *ngIf="currentKombucha.chooseToEditKombucha">
        <h3>Edit Kombucha</h3>
        <label>Enter Kombucha Name</label>
        <input [(ngModel)]="currentKombucha.name">
        <label>Enter Kombucha Brand</label>
        <input [(ngModel)]="currentKombucha.brand">
        <label>Enter Kombucha Price</label>
        <input [(ngModel)]="currentKombucha.price">
        <label>Enter Kombucha Flavor</label>
        <input [(ngModel)]="currentKombucha.flavor">
        <button (click)="currentKombucha.chooseToEditKombucha = !currentKombucha.chooseToEditKombucha">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  kombuchas: Kombucha[] = [ new Kombucha("Enlightened Organic Raw", "GT", 8.00, "original"), new Kombucha("Ginger Fixx", "Lion Heart", 7.50, "Ginger"), new Kombucha("Master Brew", "Kevita", 9.00, "Ginger"), new Kombucha("Lemon Ginger", "Humm", 8.50, "Lemon Ginger"), new Kombucha ("Just Ginger", "Brew Doctor", 8.00, "Ginger")
  ];

  selectedKombucha = null;

  editKombucha(clickedKombucha) {
    this.selectedKombucha = clickedKombucha;
  }

  finishedEditing() {
    this.selectedKombucha=null;
  }
}

export class Kombucha {
  public pint: number = 124;
  constructor(public name: string, public brand: string, public price: number, public flavor: string){}
}
