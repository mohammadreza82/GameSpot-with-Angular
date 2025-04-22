import { Component } from '@angular/core';
import { NavComponent } from "./components/nav/nav.component";
import { AuthModalComponent } from "./components/user/auth-modal/auth-modal.component";
import { RouterOutlet } from '@angular/router';
import { VideoModule } from './modules/video/video.module';

@Component({
  selector: 'app-root',
  imports: [ NavComponent, AuthModalComponent,RouterOutlet,VideoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GameSpot';
}
