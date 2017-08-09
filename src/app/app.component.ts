import { Component, ViewChild } from '@angular/core';
import { PersonComponent } from './person.component';

@Component({
  selector: 'app-root',
  template:
  `
<alert type="success">hello</alert>
<h1>Helo {{title | uppercase}}!</h1>
  <p> Date : {{today | date:'EEEE dd-MM-yyyy HH:mm:ss a Z'}} </p>
  <p>{{todaynumber | date}}</p>
  <p>{{todaynumber | date:'fullDate'}}</p>
  <p>{{todaynumber | date:'jmZ'}}</p>
  <p>short {{todaynumber | date:'short'}}</p>
    <p>e (3.1.5) is : {{e | number}}</p>
  <div>
    <p>Without object JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe:</p>
    <pre>{{object | json}}</pre>
  </div>
  <p>2 power 6 = 64 Math is: {{ 2 |  exponentialStrength:6}}</p>
  <ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>
    2. Output of <b>{{1478496544151 | date :'short'}}</b>
<br/><img [src]="image" />
<br/> <input type="text" [value]="welcomeText" />
<input type="text" #textname (keyup)="0" />
<p> Agree {{agree}}. DisAgree {{disagree}} </p>
<button (click)="changeName(textname.value)"> name </button>
<my-tutorial [tuongtacname]="textname.value"></my-tutorial>
<my-tutorial *ngFor="let persons of names" [tuongtacname2]="persons" (onVote)="parentVote($event)"></my-tutorial>
`
  , styles: ['h4 {color:blue;}']
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chào mừng bạn đến với Traceverfield';

  //property binding
  public image = "http://traceverified.com/getattachment/Gioi-thieu/Gia-tri-cot-loi-(1)/IMG_3577.JPG.aspx?width=600&height=337";
  public welcomeText = "Welcome to Angular 2 for Beginers";

  public agree: number = 0;
  public disagree: number = 0;
  public names = ['a', 'b', 'c'];

  @ViewChild(PersonComponent)
  private personcomponent: PersonComponent;

  parentVote(agree: boolean) {
    if (agree) this.agree++;
    else this.disagree++;
  }

  changeName(nametext) {
    this.personcomponent.setName(nametext);
  }

  today = new Date();
  todaynumber: number = Date.now();
  public e: number = 2.60937501920670;
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  collection: string[] = ['a', 'b', 'c', 'd'];

}