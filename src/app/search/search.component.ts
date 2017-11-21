import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updated() {
    this.onChange.emit(this.search);
  }

}
