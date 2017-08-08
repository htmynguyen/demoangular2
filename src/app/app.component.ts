import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Helo {{title}}! 
  </h1> <img [src]="image"/>  
   <br/> <input type="text" [value]="welcomeText"/> 
   <my-tutorial></my-tutorial> 
   `
  ,styles: ['h4 {color:blue;}']
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chào mừng bạn đến với Traceverfield';
  //property binding
  public image = "http://traceverified.com/getattachment/Gioi-thieu/Gia-tri-cot-loi-(1)/IMG_3577.JPG.aspx?width=600&height=337";
  public welcomeText = "Welcome to Angular 2 for Beginers";

}