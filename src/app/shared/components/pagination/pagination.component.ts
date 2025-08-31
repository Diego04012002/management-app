import { Component, inject, input, signal } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  paginationService=inject(PaginationService)
  numberPages = toSignal(this.paginationService.numberOfPages);
  page=toSignal(this.paginationService.page)
  size=toSignal(this.paginationService.size)

  example=signal(0)

  constructor(){

  }

  changePage(page:number){
    this.example.update(value=>value+1)
    this.paginationService.pageNext=this.example()
  }
}
