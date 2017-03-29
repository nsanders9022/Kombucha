import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha</h1>
    <div *ngFor="let currentKombucha of kombuchas">
      <h3 (click)="currentKombucha.thisKombucha = !currentKombucha.thisKombucha">{{currentKombucha.name}}</h3>
      <div *ngIf="currentKombucha.thisKombucha">
        <p>Brand: {{currentKombucha.brand}}</p>
        <p>Price: {{currentKombucha.price}}</p>
        <p>Flavor: {{currentKombucha.flavor}}</p>
        <p>Pint: {{currentKombucha.pint}}</p>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  kombuchas: Kombucha[] = [ new Kombucha("Enlightened Organic Raw", "GT", 8.00, "original"), new Kombucha("Ginger Fixx", "Lion Heart", 7.50, "Ginger"), new Kombucha("Master Brew", "Kevita", 9.00, "Ginger"), new Kombucha("Lemon Ginger", "Humm", 8.50, "Lemon Ginger"), new Kombucha ("Just Ginger", "Brew Doctor", 8.00, "Ginger")]
}

export class Kombucha {
  public pint: number = 124;
  constructor(public name: string, public brand: string, public price: number, public flavor: string){}
}
