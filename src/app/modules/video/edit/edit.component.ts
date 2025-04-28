import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModalService } from '../../../services/modal.service';
import IClip from '../../../models/clip.mode';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClipService } from '../../../services/clip.service';

@Component({
  selector: 'app-edit',

  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit, OnDestroy, OnChanges {
  @Input() activeClip: IClip | null = null;
  clipId = new FormControl('');
  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  editForm = new FormGroup({
    title: this.title,
    id: this.clipId,
  });
  constructor(private modal: ModalService, private clipService: ClipService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.activeClip) {
      return;
    }
    this.clipId.setValue(this.activeClip?.uid!);
    this.title.setValue(this.activeClip?.title!);
  }

  ngOnInit(): void {
    this.modal.register('editClip');
  }

  ngOnDestroy(): void {
    this.modal.unregister('editClip');
  }

  logClip(event: Event) {
    event.preventDefault();
    console.log('ActiveClip', this.activeClip);
  }

  submit() {
    if (!this.activeClip) {
      return;
    }
    this.clipService.updateClip(this.clipId.value!, this.title.value!);
  }
}
