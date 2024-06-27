ANGULAR Refreshing
==================
ng new my-app
ng g m auth --route crud-app --module app.module
ng g c auth/components/signup --module crud-app
ng g s crud-app/services/notes
ng g i crud-app/interfaces/note
ng g p pipes/append
ng g g guards/auth-guard
ng add @angular/material

Commands:
===========
1. Create a new auth lazy-load module and add lazy-load route in app.module: ng g m auth --route auth --module app.module
2. Create new signup component under auth module ng g c auth/components/signup --module auth
3. Create a new service: ng g s crud-app/services/notes
4. Create a new interface ng g i crud-app/interfaces/note

Data-bindings:
==============
1. Examples of one-way data bindings- 
isDisabled:boolean = false;
	- Interpolation
	- Attribute bindings - [attr.disabled], [disabled] = <button [disabled]="isDisabled">Dashboard</button>
	- Class binding - [class.myClass]="enableMyClassBinding" 
	- Style binding - [style.color]="myColor"
	- Event Binding - <input type="submit" (click)="submitThis()" /> and function submitThis() {}

2. Two way data binding - 
	<div>
	<input [(ngModel)]="title" placeholder="Enter text.." />
	<p>{{title}}</p>
	</div>


Angular Directive:
=================
1. Component Directive:
	<app-child></app-child>

2. Attribute Directives:
	myClassName:string = 'add-me';
	myStyle = {color: '#ccc'};
	myValue = "Initial value";

	- [(ngModel)] - <input [(ngModel)]="myValue" /> 
	- [ngClass] - <div [ngSytle]="myStyle">Test</div>
	- [ngStyle] - <div [ngClass]="myClassName">Test</div>

3. Structural Directives:
	enableBtn = true;
	posts = ['A', 'B', 'C'];
	grade = 'A';
	- *ngIF - <div *ngIf="enableBtn">Submit</div>
	- *ngFor - <ul *ngFor=let post of posts; let i = index;> <li> {{i}} {{ post }} </li> </ul>
	- [ngSwitch] - 
	<div [ngSwitch]="grade">
		<p *ngSwitchCase="'A'">Excellent</p>
		<p *ngSwitchCase="'B'">Good</p>
		<p *ngSwitchDefault>Average</p>
	</div>


PIPES
=====
	command - ng g p pipes/append
	today:number = new Date.now();
	title: string = "My pipes";
	currency = 1.232312;

	{{title | uppercase}}
	{{title | lowercase}}

	{{today}}
	{{today | date}}

	{{currency | currency }}
	{{currency | currency : "EUR"}}


AUTH GUARD
==========
Command: ng g guard guards/auth-guard
Select CanActivate option



Angular Hooks
=============
	0. Constructor
	1. ngOnChanges() - Triggers when any changes happen in data-bound input properties (Primitive types) 
	2. ngOnInit() - Triggers once to set data-bound input properties on component load
	3. ngDoCheck() - Triggers when any Array/Object inside values are updated 
		4. ngAfterContentInit()
		5. ngAfterContentChecked()
		6. ngAfterViewInit()
		7. ngAfterViewChecked()
	8. ngOnDestory()
	