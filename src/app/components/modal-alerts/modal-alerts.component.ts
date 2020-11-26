import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-alerts',
  templateUrl: './modal-alerts.component.html',
  styleUrls: ['./modal-alerts.component.scss'],
})
export class ModalAlertsComponent {
  @Input() active: boolean;

  constructor(private router: Router) {
    // this.active = false;
    console.log('tgus');
  }

  public goToSignIn(): void {
    this.router.navigateByUrl('/login');
  }
}
