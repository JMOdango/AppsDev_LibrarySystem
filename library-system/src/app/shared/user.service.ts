import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<User>;
  user$!: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection<User>('users');
    this.user$ = this.usersCollection.valueChanges();
  }

  addUser(user: User) {
    const pushkey = this.afs.createId();
    user.$key = pushkey;
    this.usersCollection.doc(pushkey).set(user);
  }

  getUsers() {
    return this.user$;
  }

  modifyStudent(userId: string, userChanges: User) {
    this.usersCollection.doc(userId).update(userChanges);
  }
  removeStudent(userId: string) {
    this.usersCollection.doc(userId).delete();
  }
}
