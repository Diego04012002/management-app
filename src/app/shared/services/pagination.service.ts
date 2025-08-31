import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  page: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  size: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  numberOfPages: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  set pageNext(val: number) {
    this.page.next(val);
  }

  get pageValue() {
    return this.page.value;
  }

  set sizeNext(val: number) {
    this.size.next(val);
  }

  get sizeValue() {
    return this.size.value;
  }

  set numberOfPagesNext(val: number) {
    this.numberOfPages.next(val);
  }

  get numberOfPagesValue() {
    return this.numberOfPages.value;
  }
}
