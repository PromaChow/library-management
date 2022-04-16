import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
  })
export class BookService{
    private bookList: Book[] = [{id:1 , name:"A Scanner Darkly", author:"Phillip K", avability: true},
    {id:2 , name:"Vile Bodies", author:"Evelyn Waugh", avability: true},
    {id:3 , name:"The Sun Also Rises", author:"Ernest Hemingway", avability: true}];

    bookTobeUpdated = new Book();
    constructor(){

    }
    insertBook(givenBook:Book){
        this.bookList.push(givenBook);
        givenBook.id = this.bookList.length;
        for(var book of this.bookList){
            console.log(book);
        }
    }

    searchBook(name:string):Book[]{
        var foundBook: Book[] = [];
        for (let book of this.bookList){
            var bookName = book.name.toLowerCase();
            if(bookName.match(name.toLowerCase())){
                foundBook.push(book);
       
            }
        }
       // console.log(foundBook);
        return foundBook;  
    }

    getBooks(): Book[]{
        return this.bookList;
    }

    deleteBook(givenBook:Book):void{
        this.bookList = this.bookList.filter(book => givenBook.id != book.id )
    }

    setBookToBeUpdated(givenBook: Book):void{
        this.bookTobeUpdated = givenBook;

    }
    getBookTobeUpdated(): Book{
        return this.bookTobeUpdated;
    }
    getIndexNumber(){
        return this.bookList.indexOf(this.bookTobeUpdated);
    }
    updateBook(givenBook: Book): void{
        this.bookList.splice(this.getIndexNumber(),1,givenBook);
    }

}
