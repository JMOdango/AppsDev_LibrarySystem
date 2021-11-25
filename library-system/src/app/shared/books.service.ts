import { Injectable } from '@angular/core';
import { Books } from 'src/app/shared/books';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksCollection: AngularFirestoreCollection<Books>;
  books$!: Observable<Books[]>;

  constructor(private afs: AngularFirestore) { 
    this.booksCollection = this.afs.collection<Books>('Books');
    this.books$ = this.booksCollection.valueChanges();
  }

  addBooks(books: Books) {
    const pushkey = this.afs.createId();
    books.$key = pushkey;
    this.booksCollection.doc(pushkey).set(books);
  }

  getBooks() {
    return this.books$;
  }

  modifyBooks(booksId: string, booksChanges: Books) {
    this.booksCollection.doc(booksId).update(booksChanges);
  }
  removeBooks(booksId: string) {
    this.booksCollection.doc(booksId).delete();
  }
}
