import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Admin } from '../../shared/admin';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() admins$: any;
  @Output() selectedAdmin = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number) {
    this.selectedAdmin.emit(i);
  }

}
