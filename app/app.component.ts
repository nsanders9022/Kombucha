import { Component } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha</h1>

    <kombucha-list [childKombuchaList]="masterKombuchaList" (clickSender)="editKombucha($event)" ></kombucha-list>

    <edit-kombucha [childSelectedKombucha] = "selectedKombucha"(doneButtonClickedSender) = "finishedEditing()"></edit-kombucha>

    <new-kombucha (newKombuchaSender)="addKombucha($event)"></new-kombucha>



  </div>
  `
})

export class AppComponent {
  masterKombuchaList: Kombucha[] = [
  new Kombucha("Enlightened Organic Raw", "GT", 8.00, "strawberry"),
  new Kombucha("Ginger Fixx", "Lion Heart", 7.50, "ginger"),
  new Kombucha("Master Brew", "Kevita", 9.00, "ginger"),
  new Kombucha("Lemon Ginger", "Humm", 8.50, "lemon"),
  new Kombucha ("Just Ginger", "Brew Doctor", 8.00, "ginger")
  ];

  selectedKombucha = null;

  editKombucha(clickedKombucha) {
    this.selectedKombucha = clickedKombucha;
  }

  finishedEditing() {
    this.selectedKombucha=null;
  }

  addKombucha(newKombuchaFromChild: Kombucha) {
    this.masterKombuchaList.push(newKombuchaFromChild);
  }



}
