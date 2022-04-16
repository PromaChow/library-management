import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {
  givenBook = new Book();
  constructor(private bookService : BookService, private router : Router) { }

  ngOnInit(): void {
  }
  insert(): void{
    console.log(this.givenBook);
    this.bookService.insertBook(this.givenBook);
    this.router.navigate(['']);
  }

}
