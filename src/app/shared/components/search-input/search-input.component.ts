import { Component, effect, inject, input, linkedSignal, output } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  searchService=inject(SearchService)

  placeHolder = input.required<string>();
  debounceTime = input<number>(500);

  initialValue = input<string>();


  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanUp) => {
    const value = this.inputValue();
    const timeOut = setTimeout(() => {
    this.searchService.searchNext=value
    }, this.debounceTime());
    onCleanUp(() => {
      clearTimeout(timeOut);
    });
  });
}
