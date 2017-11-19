import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;
  @Output() changeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.changeEvent.emit(this.search);
  }

}
