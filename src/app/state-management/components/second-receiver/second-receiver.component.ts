import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-second-receiver',
  template: `
    <div>
      <button (click)="getSubscribedData()">Send Data</button>
      <div *ngIf="isSubscribed">
        <h2>Subject: {{subjectData}}</h2>
        <h2>Behavior Subject: {{behaviorSubjectData}}</h2>
    </div>
    </div>
  `
})
export class SecondReceiverComponent implements OnInit {
  isSubscribed = false;
  subjectData!: string;
  behaviorSubjectData!: string;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {

  }

  getSubscribedData(): void {
    this.sharedDataService.getSubjectData().subscribe((data: string) => this.subjectData = data);
    this.sharedDataService.getBehaviorSubjectData().subscribe((data: string) => this.behaviorSubjectData = data);
    this.isSubscribed = true;
  }
  
}
