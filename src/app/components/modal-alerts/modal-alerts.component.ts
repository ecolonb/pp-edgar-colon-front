import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-alerts',
  templateUrl: './modal-alerts.component.html',
  styleUrls: ['./modal-alerts.component.scss'],
})
export class ModalAlertsComponent {
  @Input() active: boolean;
  @Input() type: string;
  @Output()
  public closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public deleteUserEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) {
    // this.active = false;
    console.log('tgus');
  }

  public goToSignIn(): void {
    this.router.navigateByUrl('/login');
  }
  public deleteUser(): void {
    this.deleteUserEvent.emit(true);
  }
  public cancelEvt(status): void {
    this.closeModal.emit(status);
  }
}
