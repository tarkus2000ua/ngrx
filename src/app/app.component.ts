import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 counter = 0;
 updatedAt!: number;

 get cannotDecrement(){
   return this.counter <=0;
 }

 increment(){
   this.updatedAt = Date.now();
   this.counter++;
 }
 decrement(){
  this.updatedAt = Date.now();
   this.counter--;
 }
 clear(){
  this.updatedAt = Date.now();
   this.counter=0;
 }
}
