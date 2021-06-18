import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'fe-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input()
  placeHolderText = "";
  @ViewChild('searchInput', {read:ElementRef})
  searchInput: ElementRef;
  @Output()
  searchEvent = new EventEmitter<{query?:string, action:'SEARCH' | 'CLEAR'}>();

  constructor() { }
  searchClient:string

  ngOnInit(): void {
  }

  search() {
    const searchTerm = this.searchInput.nativeElement.value;
    this.searchEvent.emit({query:searchTerm, action:'SEARCH'});
  }

  onFocus() {
    const searchTerm = this.searchInput.nativeElement.placeholder;
    if(searchTerm === this.placeHolderText) {
      this.searchInput.nativeElement.placeholder = "";
    }
  }

  onBlur() {
    const searchTerm = this.searchInput.nativeElement.placeholder;
    if(searchTerm !== this.placeHolderText || searchTerm == null) {
      this.searchInput.nativeElement.placeholder = this.placeHolderText;
    }
  }
}
