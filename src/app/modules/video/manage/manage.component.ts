import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../../services/clip.service';
import IClip from '../../../models/clip.mode';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-manage',
  standalone: false,
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss',
})
export class ManageComponent implements OnInit {
  activeClip:IClip|null=null
  clips: IClip[] = [];

  // constructor(private clipService: ClipService) {}
  constructor(private modal: ModalService) {}
  ngOnInit() {
    // this.clipService.getUserClips().subscribe((documents) => {
    //   console.log(documents);
    //   this.clips = [];
    //   documents.forEach((doc) => {
    //     const exist=this.clips.some(clip=>clip.uid===doc.data().uid)

    //     if (!exist) {    
    //       this.clips.push({
    //         ...doc.data(),
    //       });
    //     }
    //   });
    // });
  }
  openModal(event: Event, clip: IClip) {
    event.preventDefault();
    this.modal.toggleModal('editClip');
    this.activeClip=clip
  }
}
