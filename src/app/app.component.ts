import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);
  }
}
