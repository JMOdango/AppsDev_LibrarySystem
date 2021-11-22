import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle;

  user = {
    email: '',
    password: '',
  }
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
  }

  login(){
    const {email, password} = this.user;
    this.authService.login(email, password).then(() => {
      this.toastr.success("Logged in successfully.")
      this.router.navigate(["/admins"]) //<--- Change "admins" to desired route
    }).catch(err => {
      this.toastr.error("Account does not exist. Enter a different account or create a new one.");
    })
  }

  remember(){
    this.authService.setRemember();
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle().then(() => {
      this.toastr.success("Logged in successfully.")
      this.router.navigate(["/admins"]) //<--- Change "admins" to desired route
    }).catch(err => {
      this.toastr.error("Account does not exist. Enter a different account or create a new one.");
    })
  }
}

