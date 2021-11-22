import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminCardComponent } from './admin/admin-card/admin-card.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompareValidatorDirective } from './helper/compare-validator.directive';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NotFoundComponent, 
    AdminAddComponent, 
    AdminCardComponent, 
    AdminDeleteComponent, 
    AdminEditComponent, 
    AdminHomeComponent, 
    LoginComponent, 
    RegisterFormComponent, 
    CompareValidatorDirective, 
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
