import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [ {
  path: '',
  component: AdminHomeComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AdminRoutingModule { }
