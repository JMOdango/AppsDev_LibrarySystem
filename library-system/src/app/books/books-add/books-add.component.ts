import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BooksService } from 'src/app/shared/books.service';
import { Books } from 'src/app/shared/books';
@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    Title: ['', Validators.required],
    Author: ['', Validators.required],
    Genre: ['', Validators.required],
    ISBN: ['', Validators.required],
   
  });

  constructor(private fb: FormBuilder, private crud: BooksService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const payload: Books = {
      $key: '',
      Title: this.f.Title.value,
      Author: this.f.Author.value,
      Genre: this.f.Genre.value,
      ISBN: this.f.ISBN.value,
  
    };

    this.crud.addBooks(payload);
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }

}
