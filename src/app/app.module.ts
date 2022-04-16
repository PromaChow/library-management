import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { InsertBookComponent } from './insert-book/insert-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    UpdateBookComponent,
    InsertBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
