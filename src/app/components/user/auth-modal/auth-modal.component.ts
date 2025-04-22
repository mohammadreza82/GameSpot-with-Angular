import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { ModalService } from '../../../services/modal.service';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";


@Component({
  selector: 'app-auth-modal',
  imports: [SharedModule, LoginComponent, RegisterComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements OnInit, OnDestroy {
  modal = inject(ModalService)

  ngOnInit(): void {
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
  
}
