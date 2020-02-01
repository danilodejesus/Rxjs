import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs'
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);
    
    from([20, 15, 40, 5])
    .pipe(
      tap(item => (console.log(`valor origingal: ${item}`))),
      map(item => item * 2),
      map(item => item - 10),
      map(item => {
        if (item === 0) {
          throw new Error('Zero detected')
        }
        return item
      }),
      take(3)
    ).subscribe(
      item => console.log(`item: ${item}`),
      err => console.log(`error occurred ${err}`),
      () => console.log(`complete`)
    );
  }
}
