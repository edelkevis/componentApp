import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit {
  public social = new Social("Linkenid");
  public datosPersonales = new DatosPersonales("Eduardo L Quintero","Desarrollador","casdadas",this.social);
  constructor() { 
    
  }

  ngOnInit() {
  }

}

export class DatosPersonales{
  constructor(titulo,subtitle,content,social) {
    this.titulo = titulo;
    this.subtitle = subtitle;
    this.content = content;
    this.social = social;
   }

  public titulo:string;
  public subtitle:string;
  public content:string;
  public social:Social;

}

export class Social {

  constructor(name) { 
    this.name = name;
  }

  public name:string;
  public like:number = 0;
  public unlike:number = 0;

  addlike = like => this.like = this.like+like;
  addunlike = unlike => this.unlike = this.unlike+unlike;
}
