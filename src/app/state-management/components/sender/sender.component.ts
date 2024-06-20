import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-sender',
  template: `
  <div>
    <h2>Sender Component</h2>
    <input [(ngModel)]="initialData" placeholder="Enter data"> &nbsp;
    <button (click)="sendData()">Send Data</button>
  </div>
  `
})
export class SenderComponent {
  initialData = '';

  constructor(private sharedDataService: SharedDataService) { }

  sendData() {
    this.sharedDataService.sendData(this.initialData);
  }
}
