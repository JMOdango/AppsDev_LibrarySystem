import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksDeleteComponent } from './books-delete/books-delete.component';
import { BooksHomeComponent } from './books-home/books-home.component';

import { BookCardComponent } from './book-card/book-card.component';


@NgModule({
  declarations: [
    BooksAddComponent,
    BooksDeleteComponent,
    BooksHomeComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
