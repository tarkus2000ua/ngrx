import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear, countSelector, decrement, increment, updatedAtSelector } from './reducers/counter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 count$ = this.store.select(countSelector);
 updatedAt$ = this.store.select(updatedAtSelector);
 cannotDecrement$ = this.count$.pipe(
   map((count:number) => count<=0)
 )

 constructor(private store: Store){}

 increment(){
   this.store.dispatch(increment());
 }
 decrement(){
  this.store.dispatch(decrement());
 }
 clear(){
  this.store.dispatch(clear());
 }
}
