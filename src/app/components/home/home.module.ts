import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material.module';
import { ModalAlertsModule } from '../modal-alerts/modal-alerts.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ModalAlertsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
