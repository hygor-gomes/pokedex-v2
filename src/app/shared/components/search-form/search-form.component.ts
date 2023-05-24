import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Input searchTerm: string;

  constructor() {}

  submitSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
}
