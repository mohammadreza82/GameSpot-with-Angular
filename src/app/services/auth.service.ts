import { inject, Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { IUser } from '../models/user.model';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseAuth = inject(Auth);
  private firebaseDb = inject(Firestore);
  router = inject(Router);
  public isAuthenticated: Observable<boolean>;

  constructor() {
    this.isAuthenticated = authState(this.firebaseAuth).pipe(
      map((user) => !!user)
    );
  }

  async createUser(userData: IUser): Promise<void> {
    console.log(userData);

    if (!userData.password) {
      throw new Error('Password not provided!');
    }

    try {
      // ایجاد حساب کاربری در Firebase Authentication
      const userCred = await createUserWithEmailAndPassword(
        this.firebaseAuth,
        userData.email!,
        userData.password
      );

      console.log(userCred);

      if (!userCred.user) {
        throw new Error('User registration failed!');
      }

      // ایجاد یک سند برای کاربر در Firestore
      const userRef = doc(this.firebaseDb, 'users', userCred.user.uid);

      await setDoc(userRef, {
        name: userData.name,
        email: userData.email,
        age: userData.age,
        phone: userData.phone,
      });

      // به‌روزرسانی نام کاربر در Firebase Authentication
      await updateProfile(userCred.user, {
        displayName: userData.name,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async logOut(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.firebaseAuth.signOut();
    this.router.navigateByUrl('/')
  }
}
