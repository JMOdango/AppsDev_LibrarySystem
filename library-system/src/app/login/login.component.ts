import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/shared/user.service';

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
    private userService: UserService,
    ) { }

  ngOnInit(): void {
  }

  login(){
    const {email, password} = this.user;
    this.authService.login(email, password).then(() => {
      this.toastr.success("Logged in successfully.")
      this.router.navigate(["/users"]) //<--- Change "admins" to desired route
    }).catch(err => {
      this.toastr.error("Error signing in. Please check your password or create a new account.");
    })
  }

  remember(){
    this.authService.setRemember();
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle().then(() => {
      this.updateUser();
      this.toastr.success("Logged in successfully.")
      this.router.navigate(["/admins"]) //<--- Change "admins" to desired route
    }).catch(err => {
      this.toastr.error("Account does not exist. Enter a different account or create a new one.");
    })
  }

  updateUser(name?: string){
    this.authService.getAuth().subscribe(user => {
      if(user)
        this.userService.addUser(user.uid, user.email || "", user.displayName || name || "")
    }, error => {
      this.toastr.error(error.message);
    })
  }
}

