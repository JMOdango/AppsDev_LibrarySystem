import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admins',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'register',
    component: RegisterFormComponent,  
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

/*AuthGuard (If used, if user is not logged in 
and they try to access a page, they will be redirected 
back to the login page.)

How to use:
{
  path: '',
  component: HomeComponent, 
  canActivate: [AuthGuard]
},*/

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
