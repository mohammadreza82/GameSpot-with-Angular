import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
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
  @Output() update = new EventEmitter();
  clipId = new FormControl('');
  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  editForm = new FormGroup({
    title: this.title,
    id: this.clipId,
  });

  alertColor = 'blue';
  showAlert = false;
  alertMsg: string = 'در حال انجام...';

  constructor(private modal: ModalService, private clipService: ClipService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.activeClip) {
      return;
    }
    this.showAlert = false;
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
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'در حال انجام...';
    try {
      this.clipService.updateClip(this.clipId.value!, this.title.value!);
    } catch (error) {
      this.showAlert = true;
      this.alertColor = 'red';
      this.alertMsg = 'مشکلی در عملیات بهجود آمد!';
      return;
    }
    this.activeClip.title = this.title.value!;
    this.update.emit(this.activeClip);
    this.alertColor = 'green';
    this.alertMsg = 'عملیات با موفقیت انجام شد.';
  }
}
