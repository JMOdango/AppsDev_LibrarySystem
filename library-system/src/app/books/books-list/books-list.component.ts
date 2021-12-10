import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Books } from 'src/app/shared/books';
import * as _ from 'lodash';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Books[];
  constructor(private booksService: BooksService) { }

  
  filteredBooks:any;

  Genre: string;
  Author: string;

  filters = {};


  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
      this.applyFilters()
    });
    
  }

  private applyFilters() {
    this.filteredBooks = _.filter(this.books, _.conforms(this.filters))
  }

  filterExact (property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters();
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters;
  }



}
