import { Component, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  @Input() adminId: string;
  @Output() deleted: boolean;

  constructor(private crud: AdminService) { }

  ngOnInit(): void {
  }

  onDelete(id: string) {
    this.crud.removeAdmin(id);
  }

  onReuseDelete() {
    this.crud.removeAdmin(this.adminId);
  }

}
