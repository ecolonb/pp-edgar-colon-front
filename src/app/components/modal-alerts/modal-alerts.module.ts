import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertsComponent } from './modal-alerts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalAlertsComponent],
  exports: [ModalAlertsComponent],
})
export class ModalAlertsModule {}
