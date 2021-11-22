import { Injectable } from '@angular/core';
import { Admin } from '../shared/admin';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private adminsCollection: AngularFirestoreCollection<Admin>;
  admin$!: Observable<Admin[]>;

  constructor(private afs: AngularFirestore) {
    this.adminsCollection = this.afs.collection<Admin>('admins');
    this.admin$ = this.adminsCollection.valueChanges();
  }

  addAdmin(admin: Admin) {
    const pushkey = this.afs.createId();
    admin.$key = pushkey;
    this.adminsCollection.doc(pushkey).set(admin);
  }

  getAdmins() {
    return this.admin$;
  }

  modifyAdmin(adminId: string, adminChanges: Admin) {
    this.adminsCollection.doc(adminId).update(adminChanges);
  }
  removeAdmin(adminId: string) {
    this.adminsCollection.doc(adminId).delete();
  }
}
