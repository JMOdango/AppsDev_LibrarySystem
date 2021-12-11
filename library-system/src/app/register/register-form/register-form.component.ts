import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: any = {
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  register(){
    const {email, password} = this.user;
    this.authService.register(email, password).then(() => {
      this.updateUser(this.user.name);
      this.router.navigate(["/users"]); //<--- Change "admins" to desired route
      this.toastr.success("Account created successfully.");
    }).catch(err => {
      this.toastr.error("There's a problem creating your account. Account might already exist.")
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
