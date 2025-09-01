import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  search: BehaviorSubject<string> = new BehaviorSubject<string>("");


  set searchNext(val: string) {
    this.search.next(val);
  }

  get searchValue() {
    return this.search.value;
  }

  resetValue(){
    this.search.next("");
  }
}
