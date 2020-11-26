import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLoadingComponent } from './modal-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalLoadingComponent],
  exports: [ModalLoadingComponent]
})
export class ModalLoadingModule {}
