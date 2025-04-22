import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  modalService = inject(ModalService)
  elementRef = inject(ElementRef)

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement)
  }
  
  @Input() modalId = '';
  closeModal() {
    this.modalService.toggleModal(this.modalId)
  }

  ngOnDestroy() {
    document.body.removeChild(this.elementRef.nativeElement)
  }
  
}
