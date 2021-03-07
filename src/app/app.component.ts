import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear, countSelector, decrement, increment } from './reducers/counter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 updatedAt!: number;
 count$ = this.store.select(countSelector);
 cannotDecrement$ = this.count$.pipe(
   map((count:number) => count<=0)
 )

 constructor(private store: Store){}

 increment(){
   this.store.dispatch(increment());
   this.updatedAt = Date.now();
 }
 decrement(){
  this.store.dispatch(decrement());
  this.updatedAt = Date.now();
 }
 clear(){
  this.store.dispatch(clear());
  this.updatedAt = Date.now();
 }
}
