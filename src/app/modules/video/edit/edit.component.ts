import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModalService } from '../../../services/modal.service';
import IClip from '../../../models/clip.mode';

@Component({
  selector: 'app-edit',

  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit, OnDestroy {
  @Input() activeClip: IClip | null = null;
  constructor(private modal: ModalService) {}
  ngOnInit(): void {
    this.modal.register('editClip');
  }
  ngOnDestroy(): void {
    this.modal.unregister('editClip');
  }
  logClip(event:Event) {
    event.preventDefault()
    console.log('ActiveClip', this.activeClip);
  }
}
