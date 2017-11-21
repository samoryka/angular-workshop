import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  filterCondition: string;

  searchChanged(value) {
    this.filterCondition = value;
    console.log(value);
  }
}
