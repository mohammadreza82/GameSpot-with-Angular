import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputsComponent {
  @Input() lable: string = '';
  @Input() type: string | number = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() patternType: 'password' | 'phone' = 'password';
}