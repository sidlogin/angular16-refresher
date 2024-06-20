import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private subjectData = new Subject<string>();
  private behaviorSubject = new BehaviorSubject<string>("Initial Value");

  sendData(data: string) {
    this.subjectData.next(data);
    this.behaviorSubject.next(data);
  }

  getSubjectData() {
    return this.subjectData.asObservable();
  }

  getBehaviorSubjectData() {
    return this.behaviorSubject.asObservable();
  }
}
