import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rememberUser: string = "session";

  constructor(private afAuth: AngularFireAuth) { }

  async login(email:string, password:string){
    await this.afAuth.setPersistence(this.rememberUser);
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    return this.afAuth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  setRemember(){
    this.rememberUser = firebase.auth.Auth.Persistence.LOCAL;
  }

  register(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

}
