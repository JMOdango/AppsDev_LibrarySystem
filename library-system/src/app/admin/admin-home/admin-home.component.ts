import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
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

  admins$ = [];
  editing = false;
  editingIndex!: number;

  constructor(private fb: FormBuilder, private crud: AdminService) {}

  ngOnInit(): void {
    this.crud.getAdmins().subscribe((val) => {
      this.admins$ = val;
    });
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
}
