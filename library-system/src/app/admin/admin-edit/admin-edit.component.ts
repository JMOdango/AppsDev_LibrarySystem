import {Component, Input, OnInit, Output, EventEmitter, OnChanges,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { Admin } from '../../shared/admin';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
})
export class AdminEditComponent implements OnInit, OnChanges {
  @Output() editStatus = new EventEmitter<boolean>();
  @Input() admin: Admin;
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private crud: AdminService) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      $key: [this.admin.$key],
      firstName: [this.admin.firstName, Validators.required],
      lastName: [this.admin.lastName, Validators.required],
      email: [
        this.admin.email,
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      mobileNumber: [this.admin.mobileNumber, Validators.required],
    });
  }

  ngOnChanges(): void {
    this.editForm = this.fb.group({
      $key: [this.admin.$key],
      firstName: [this.admin.firstName, Validators.required],
      lastName: [this.admin.lastName, Validators.required],
      email: [
        this.admin.email,
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      mobileNumber: [this.admin.mobileNumber, Validators.required],
    });
  }

  onSubmit() {
    const payload: Admin = {
      $key: this.admin.$key,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      mobileNumber: this.f.mobileNumber.value,
    };

    this.crud.modifyAdmin(this.admin.$key, payload);
    this.editStatus.emit(false);
  }

  stopEditing() {
    this.editStatus.emit(false);
  }

  get f() {
    return this.editForm.controls;
  }
}

