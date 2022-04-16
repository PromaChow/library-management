import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  view : number = 1;
  foundBook: Book[] = [];
 
  constructor(private router : Router, private bookService: BookService) {}

  ngOnInit(): void {
  } 
  bookList = this.bookService.getBooks();
  insertBook():void{
    this.router.navigate(['insert']);
  }
  searchBook():void{
    this.view = 2;
    //important
    var name = (<HTMLInputElement>document.getElementById('searchBook')).value;
    this.foundBook = this.bookService.searchBook(name);
    console.log(this.foundBook);
  }

  deleteBook(givenBook: Book): void {
    this.bookService.deleteBook(givenBook);
    this.bookList = this.bookService.getBooks();
    }
  
  updateBook(givenBook:Book) : void{
    // this.router.navigate(['update'], {queryParams: { 'Book' : JSON.stringify(givenBook)},
    //   queryParamsHandling: 'preserve' }) 
    this.bookService.setBookToBeUpdated(givenBook);
    this.router.navigate(['update']);
    

    
  }


}
