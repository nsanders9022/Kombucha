import { Component } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha</h1>

    <kombucha-list [childKombuchaList]="masterKombuchaList" (clickSender)="editKombucha($event)"></kombucha-list>

    <edit-kombucha [childSelectedKombucha] = "selectedKombucha"(doneButtonClickedSender) = "finishedEditing()"></edit-kombucha>
  </div>
  `
})

export class AppComponent {
  masterKombuchaList: Kombucha[] = [
  new Kombucha("Enlightened Organic Raw", "GT", 8.00, "original"),
  new Kombucha("Ginger Fixx", "Lion Heart", 7.50, "Ginger"),
  new Kombucha("Master Brew", "Kevita", 9.00, "Ginger"),
  new Kombucha("Lemon Ginger", "Humm", 8.50, "Lemon Ginger"),
  new Kombucha ("Just Ginger", "Brew Doctor", 8.00, "Ginger")
  ];

  selectedKombucha = null;

  editKombucha(clickedKombucha) {
    this.selectedKombucha = clickedKombucha;
  }

  finishedEditing() {
    this.selectedKombucha=null;
  }



}
