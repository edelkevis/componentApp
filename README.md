# ComponentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

1. modelo de datos comun descripcion del usuario
2. crear archivo con la informacion
3. modularizacion
4. la comunicacion entre modulos ( Directivas disccuptivas)

------------------------------

@Input() title:string
@output() onclick= new EventEmitter<string>();

<button (click)="buttonWasClicked()"></button>

public buttonWasClicked(){
	this.onclick = alert("");
	this.onclick.emit();
}


en el component


<app-child-component [title]="{{}}" or 
					 [title]="'titulo generico'" 
					 (onclick)="childClicked($event)">
					 
public childClicked(info :string){
	cconsole.log(info);
}


<p *ngfor="let c collection; let i = index;let o = odd; let e= even;let f =  first;let l = last ">
{{c.data}},
i: {{i}},
o: {{o}},
e: {{e}},
l: {{l}},
</p>