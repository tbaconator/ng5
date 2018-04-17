import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Try Skydiving at least once', 'Learn to speak in French', 'Live oversees (Not in the US)', 'Adopt', 'Rap in a Wedding?']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
