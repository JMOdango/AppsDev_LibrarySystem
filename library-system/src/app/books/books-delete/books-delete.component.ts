import { Component, Input, OnInit, Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.css']
})
export class BooksDeleteComponent implements OnInit {
  @Input() bookId: string;
  @Output() deleted: boolean;
  constructor(private crud: BooksService) { }

  ngOnInit(): void {
  }

  onDelete(id: string) {
    this.crud.removeBooks(id);
  }

  onReuseDelete() {
    this.crud.removeBooks(this.bookId);
  }

}
