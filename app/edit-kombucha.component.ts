import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component ({
  selector: 'edit-kombucha',
  template: `
  <div *ngIf="childSelectedKombucha">
    <h3>Edit Kombucha</h3>
    <label>Enter Kombucha Name</label>
    <input [(ngModel)]="childSelectedKombucha.name" class="form-control">
    <label>Enter Kombucha Brand</label>
    <input [(ngModel)]="childSelectedKombucha.brand" class="form-control">
    <label>Enter Kombucha Price</label>
    <input [(ngModel)]="childSelectedKombucha.price" class="form-control">
    <label>Enter Kombucha Flavor</label>
    <input [(ngModel)]="childSelectedKombucha.flavor" class="form-control">
    <button class="btn btn-warning" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKombuchaComponent {
  @Input() childSelectedKombucha: Kombucha;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
