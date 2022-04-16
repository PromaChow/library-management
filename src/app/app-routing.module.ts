import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { InsertBookComponent } from './insert-book/insert-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  {path : '', component:BookListComponent},
  {path : 'insert' ,component : InsertBookComponent},
  {path : 'update', component: UpdateBookComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }