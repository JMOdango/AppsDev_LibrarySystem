import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksDeleteComponent } from './books-delete/books-delete.component';
import { BooksHomeComponent } from './books-home/books-home.component';

import { BookCardComponent } from './book-card/book-card.component';


import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'evironment';

import { BooksService } from '../shared/books.service';
import { BooksListComponent } from './books-list/books-list.component';
@NgModule({
  declarations: [
    BooksAddComponent,
    BooksDeleteComponent,
    BooksHomeComponent,
    BookCardComponent,
    BooksListComponent,
 
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [ BooksService]
})
export class BooksModule { }
