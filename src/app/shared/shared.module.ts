import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { InputsComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';




@NgModule({
  declarations: [ModalComponent, TabComponent, TabsContainerComponent, InputsComponent, AlertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ModalComponent, TabComponent, TabsContainerComponent, InputsComponent, AlertComponent]
})
export class SharedModule { }
