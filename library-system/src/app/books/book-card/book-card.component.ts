import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books } from 'src/app/shared/books';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() books$: any;
  @Output() selectedBook = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClick(i: number) {
    this.selectedBook.emit(i);
  }
}
