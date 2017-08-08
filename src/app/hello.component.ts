import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h2>This TEDU Angular2 Tutorial component</h2>
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

`,
    styles:[`.redColor{
        color:red;
    }`]
})
export class HelloComponent{
 public applyClass = true;
    public blueColor = false;
 OnClick(value){
        console.log(value); 
    }

    public showLineIf = true;

    public color = "383838";

    public colors: string[] = ["red","green","blue"];
}
