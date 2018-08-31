import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Social, DatosPersonales } from '../tarjeta-presentacion/tarjeta-presentacion.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Tarjea de presentacion', cols: 1, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

var social = new Social("Facebook");
var datosPersonales = new DatosPersonales("Eduardo Quintero","Desarrollador","Texto de la segunda linea",social);