import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksHomeComponent } from './books-home/books-home.component';

const routes: Routes = [{
  path: '',
  component: BooksHomeComponent ,
},];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class BooksRoutingModule { }
