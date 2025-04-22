import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';
import { Auth, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  modalService = inject(ModalService);
  authService = inject(AuthService);
  auth = inject(Auth);

  openModal(event: Event) {
    event.preventDefault();
    this.modalService.toggleModal('auth');
  }

  // async logout(event: Event) {
  //   event.preventDefault();

  //   try {
  //     await signOut(this.auth);
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //   }
  // }
  logout(event: Event) {
    this.authService.logOut(event);
  }
}
