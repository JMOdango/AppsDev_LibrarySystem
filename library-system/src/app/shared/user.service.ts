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
    this.usersCollection = this.afs.collection<User>('Users');
    this.user$ = this.usersCollection.valueChanges();
  }

  addUser(id: string, email: string, name: string){
    return this.afs.doc('/Users/'+id).set({
      name: name,
      email: email
    }, {merge: true}).then(() => {
      console.log('user saved successfully')
    }).catch((reason: any) => {
      console.log('user was not saved', reason)
    })
  }

  getUser(id: string): Observable<User>{
    return this.afs.doc('User/'+id).valueChanges() as Observable<User>
  }
}

