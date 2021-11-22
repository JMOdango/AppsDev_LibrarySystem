import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { Admin } from '../../shared/admin';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
    mobileNumber: ['', Validators.required],
  });
  
  constructor(private fb: FormBuilder, private crud: AdminService) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    const payload: Admin = {
      $key: '',
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      mobileNumber: this.f.mobileNumber.value,
    };

    this.crud.addAdmin(payload);
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }

}
