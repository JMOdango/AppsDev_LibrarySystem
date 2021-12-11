import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './shared/user.service';
import { AdminService } from './shared/admin.service';
import { User } from './shared/user';
import { Admin } from './shared/admin';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    name: ['', Validators.required],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
  });

  user: any;

  users$ = [];
  editing = false;
  editingIndex!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    ) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe(user => {
      this.user = user;
    })
  }

  onEdit(index: any) {
    this.editing = true;
    this.editingIndex = index;
  }

  editComplete(value: any) {
    this.editing = value;
    this.editingIndex = null;
  }

  get f() {
    return this.form.controls;
  }

  logout(){
    this.authService.logout();
    this.toastr.success("Logged out successfully.");
    this.router.navigate(["/login"])
  }
}
