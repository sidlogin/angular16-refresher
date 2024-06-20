import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-receiver',
  template: `
    <div>
      <h2>Subject: {{subjectData}}</h2>
      <h2>Behavior Subject: {{behaviorSubjectData}}</h2>
    </div>
  `
})
export class ReceiverComponent implements OnInit {
  subjectData!: string;
  behaviorSubjectData!: string;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.getSubjectData().subscribe((data: string) => this.subjectData = data);
    this.sharedDataService.getBehaviorSubjectData().subscribe((data: string) => this.behaviorSubjectData = data);
  } 
  
}
