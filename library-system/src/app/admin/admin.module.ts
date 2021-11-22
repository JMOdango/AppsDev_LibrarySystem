import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminCardComponent } from './admin-card/admin-card.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [ 
    AdminAddComponent, 
    AdminCardComponent, 
    AdminDeleteComponent, 
    AdminEditComponent, 
    AdminHomeComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
