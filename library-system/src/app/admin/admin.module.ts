import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCardComponent } from './admin-card/admin-card.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AdminCardComponent,
    AdminDeleteComponent,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
