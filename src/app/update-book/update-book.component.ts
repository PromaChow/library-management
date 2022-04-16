import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  
  constructor(private bookService : BookService, private route : Router) { }

  givenBook = JSON.parse(JSON.stringify(this.bookService.getBookTobeUpdated()));


  ngOnInit(): void {
   
  }

  update(){  
    this.bookService.updateBook(this.givenBook);
    this.route.navigate(['']);
  }

}
