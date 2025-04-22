import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import IClip from '../models/clip.mode';

@Injectable({
  providedIn: 'root',
})
export class ClipService {
  private clipsCollection!: AngularFirestoreCollection<IClip>;
  constructor(private db: AngularFirestore) {
    this.clipsCollection = db.collection('clips');
  }
  createClip(data: IClip) {
    return this.clipsCollection.add(data);
  }
}
