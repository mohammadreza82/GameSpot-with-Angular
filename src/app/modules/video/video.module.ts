import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { RouterLink } from '@angular/router';
import { EventBlockerDirective } from '../../shared/directives/event-blocker.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    RouterLink,
    EventBlockerDirective,
    ReactiveFormsModule,
    SharedModule,
    AngularFirestoreModule
]
})
export class VideoModule { }
