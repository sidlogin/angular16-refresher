# angular16-refresher
Angular basic concept refresher

## Commands:
===========
1. Create a new auth lazy-load module and add lazy-load route in app.module: ng g m auth --route auth --module app.module
2. Create new signup component under auth module ng g c auth/components/signup --module auth
3. Create a new service: ng g s crud-app/services/notes
4. Create a new interface ng g i crud-app/interfaces/note

## Data-bindings:
==============
1. One way data binding - attr binding, class binding, style binding are example of one-way data bindings
isDisabled:boolean = false;
example: <button [disabled]="isDisabled">Dashboard</button>

2. Two way data binding - 
<div>
  <input [(ngModel)]="title" placeholder="Enter text.." />
  <p>{{title}}</p>
</div>

## Directives:

### Attribute Directives
myClassName:string = 'add-me';
<div [ngClass]="myClassName"> </div>

myStyle = {color: '#ccc'};
<div [ngSytle]="myStyle"> </div>

### Structure Directives:
  - *ngIF
  - *ngFor
  - [ngSwitch]

## AUTH GUARD
Command: ng g guard guards/auth-guard
Select CanActivate option

## Angular Hooks
	0. Constructor
	1. ngOnChanges() - Triggers when any changes happen in data-bound input properties (Primitive types) 
	2. ngOnInit() - Triggers once to set data-bound input properties on component load
	3. ngDoCheck() - Triggers when any Array/Object inside values are updated 
		4. ngAfterContentInit()
		5. ngAfterContentChecked()
		6. ngAfterViewInit()
		7. ngAfterViewChecked()
	8. ngOnDestory()
	