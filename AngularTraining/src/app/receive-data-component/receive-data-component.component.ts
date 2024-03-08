import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviourServiceService } from '../behaviour-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receive-data-component',
  templateUrl: './receive-data-component.component.html',
  styleUrls: ['./receive-data-component.component.css'],
})
export class ReceiveDataComponentComponent implements OnInit, OnDestroy {
  recievedData: any;
  subjectData: any;

  bsSubscription$ = new Subscription();
  subjectSubscription$ = new Subscription();

  constructor(public behaviourService: BehaviourServiceService) {}

  ngOnInit() {
    this.bsSubscription$ = this.behaviourService.behaveData.subscribe(
      (data) => {
        this.recievedData = data;
      }
    );

    this.behaviourService.newData.subscribe((data) => {
      this.subjectData = data;
    });
  }

  // Must need to unsubscribe BS and subject
  ngOnDestroy(): void {
    if (this.bsSubscription$) {
      this.bsSubscription$.unsubscribe();
    }
    if (this.subjectSubscription$) {
      this.subjectSubscription$.unsubscribe();
    }
  }
}
