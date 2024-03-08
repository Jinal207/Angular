import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BehaviourServiceService {

  public behaveData = new BehaviorSubject<string>("Default Value");
  public newData = new Subject<string>();

  constructor() { }

}

