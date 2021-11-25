import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    Title: ['', Validators.required],
    Author: ['', Validators.required],
    Genre: ['', Validators.required],
    ISBN: ['', Validators.required],
  });

  books$ = [];
  editing = false;
  editingIndex!: number;
  constructor(private fb: FormBuilder, private crud: BooksService) { }

  ngOnInit(): void {
    this.crud.getBooks().subscribe((val) => {
      this.books$ = val;
    });
  }
  
  onEdit(index: any) {
    this.editing = true;
    this.editingIndex = index;
  }

  editComplete(value: any) {
    this.editing = value;
    this.editingIndex = null;
  }

  get f() {
    return this.form.controls;
  }
}
