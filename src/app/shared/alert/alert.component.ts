import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() color = 'blue';

 
  get bgColor() {
    return `bg-${this.color}-400`;
  }
}
