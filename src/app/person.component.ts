import { Component } from '@angular/core';
import { Person } from './person';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h2>This TEDU Angular2 Tutorial component</h2>
              <h4>Sub Component</h4>
        <h3 [class.redColor]="applyClass">Apply class</h3>
    <h4 [style.color]="blueColor?'blue':'orange'">Apply style</h4>
<button (click)="OnClick(name.value)">Click me</button>
          <button (click)="OnClick(name)">Click me</button>
     <button (click)="OnClick($event)">Click me</button>

    <input type="text" #name/> 
   <br>

  <input type="text" [(ngModel)] = "fname" />
   <input type="text" [(ngModel)] = "lname" />
   <br>
   Full name: {{fname}} {{lname}}

   <br/>
   <h3 *ngIf="showLineIf">This ngIf directive line.</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This line color is red</p>
        <p *ngSwitchCase="'blue'">This line color is blue</p>
        <p *ngSwitchCase="'green'">This line color is green</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>

    <ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>

     <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
        {{person.name}}
    </li>
  </ul>

    <p [ngClass]="{classOne:cone,classTwo:ctwo}">This ngClass apply style</p>
    <button (click)="toggle()">Toggle</button>
    <p [ngStyle]="{'font-style':style,'font-size':size}">This paragaph will be apply to ngStyle</p>
   
      <p>Child component: {{tuongtacname}}</p>
            <p>Child component2: {{tuongtacname2}}</p>

    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disgree</button>
    Result: {{voted}}
`,
    styles: [`.redColor{
        color:red;
    }
     .classOne{
            color:yellow;
        }
        .classTwo{
            background-color:black;
        }
    `]
})
export class PersonComponent {
    public applyClass = true;
    public blueColor = false;
    OnClick(value) {
        console.log(value);
    }
    public showLineIf = true;

    public color = "383838";

    public colors: string[] = ["red", "green", "blue"];

    people: Person[] = [
        { name: 'Luke Skywalker', height: 177, weight: 70 },
        { name: 'Darth Vader', height: 200, weight: 100 },
        { name: 'Han Solo', height: 185, weight: 85 },
    ];
    public cone = true;
    public ctwo = true;
    public style = "italic";
    public size = "30px";
    toggle() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }

    @Input() tuongtacname: string;
    @Input() tuongtacname2: string;

    @Output() onVote = new EventEmitter<boolean>();
    public voted: boolean = false;

    setName(tuongtacname2: string) {
        this.tuongtacname2 = tuongtacname2;
    }
    vote(agree: boolean) {
        this.voted = true;
        this.onVote.emit(agree);
    }


}
