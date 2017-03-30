import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KombuchaListComponent } from './kombucha-list.component';
import { EditKombuchaComponent } from './edit-kombucha.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  KombuchaListComponent,
                  EditKombuchaComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
