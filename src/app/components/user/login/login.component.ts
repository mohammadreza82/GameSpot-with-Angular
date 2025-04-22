import { Component, inject, Injectable, ViewChild } from '@angular/core';
import { Auth, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

import { Firestore } from '@angular/fire/firestore';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  firebaseAuth = inject(Auth);
  @ViewChild('loginForm') loginForm:FormGroup|null=null;
  credentials = {
    email: '',
    password: ''
  }
  showAlert = false
  alertMsg = 'لطفا صبر کنید'
  alertColor = 'blue'
  inSubmission = false
  constructor() { }



  async login() {

    this.showAlert = true
    this.alertMsg = 'لطفا صبر کنید'
    this.alertColor = 'blue'
    this.inSubmission = true
    try {
      await signInWithEmailAndPassword(this.firebaseAuth, this.credentials.email, this.credentials.password)
      .then((res) => {
        console.log(res);
      });
    } catch (e) {
      this.inSubmission = false
      this.alertMsg = 'خطایی رخ داده است لطفا دوباره امتحان کنید'
      this.alertColor = 'red'

      console.log(e)

      return
    }
    this.loginForm?.reset();
    this.alertMsg = 'ورود شما با موفقیت انجام شد'
    this.alertColor = 'green'
    
    // signInWithEmailAndPassword(this.firebaseAuth, this.credentials.email, this.credentials.password)
    // .then((res) => {
    //   console.log(res);
    // });
  }
}

