import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { last, switchMap } from 'rxjs';
import firebase from 'firebase/compat/app';
import { ClipService } from '../../../services/clip.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {
  isDragOver: boolean = false;
  file: File | null = null;
  nextStep = false;

  showAlert = false;
  alertColor = 'blue';
  alertMsg = 'لطفا صبر کنید ویدیو در حال اپلود میباشد!';
  isSubmission = false;
  user: firebase.User | null = null;

  percenTage = 0;
  showPercenTage = false;
  task!: AngularFireUploadTask;
  title = new FormControl('', [Validators.required, Validators.min(3)]);

  uploadForm = new FormGroup({
    title: this.title,
  });

  constructor(
    private clipsService: ClipService,
    private auth: AngularFireAuth
  ) {
    auth.user.subscribe((user) => (this.user = user));
  }
  // private storage: AngularFireStorage
  handleStoreFile(event: Event) {
    this.isDragOver = false;
    // console.log(event);
    // ?? => It returns null instead of undefined.

    this.file = (event as DragEvent).dataTransfer?.files.item(0) ?? null;
    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }

    console.log(this.file);
    this.nextStep = true;
    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
  }

  handleUploadFile() {
    console.log('File Uploaded...');
    const clipFileName = uuid();
    const clipPath = `clipes/${clipFileName}`;
    // this.task= this.storage.upload(clipPath,this.file)
    // const clipRef=this.storage.ref(clipPath)
    this.showPercenTage = true;
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'لطفا صبر کنید ویدیو در حال اپلود میباشد!';
    this.isSubmission = true;
    this.task.percentageChanges().subscribe((progress) => {
      this.percenTage = (progress as number) / 100;
    });

    this.task
      .snapshotChanges()
      .pipe(
        last()
        // switchMap(clipRef.getDownloadURL())
      )
      .subscribe({
        // console.log(result);
        next: async (url) => {
          const clip = {
            uid: this.user?.uid as string,
            displayName: this.user?.displayName as string,
            title: this.title.value as string,
            fileName: `${clipFileName}.mp4` as string,
            url,
          };
          // const clipDocRef = await this.clipsService.createClip(clip);
          // console.log(clipDocRef);

          this.alertColor = 'green';
          this.alertMsg = 'اپلود با موفقیت انجام شد!';
          this.showPercenTage = false;
        },
        error: (err) => {
          this.alertColor = 'red';
          this.alertMsg = 'اپلود با خطا مواجه شد!';
          this.showPercenTage = false;
          this.isSubmission = false;
          console.log(err);
        },
      });
  }
}
