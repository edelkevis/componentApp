import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit {
  public social = new Social("Linkenid");
  //public lstsocial:Social[] = [this.social];
  
  public persona = new Persona("Eduardo L Quintero","Desarrollador","casdadas","src","src2",this.social);
  constructor() { 
    
  }

  ngOnInit() {
  }

}

export class Persona{
  public title:string;
  public subtitle:string;
  public content:string;
  public img:string;
  public img2:string;
  //public lstSocial:Social[];
  public social:Social;

  constructor(title,subtitle,content,img,img2,social) {
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.img = img;
    this.img2 = img2;
    this.social = social;
   }
}

export class Social {

  public name:string;
  public like:number = 0;
  public unlike:number = 0;
  public total:number = 0;

  addLike = like => { 
    //(this.unlike > 0 ? this.unlike-=1 : 0); 
    (this.like = this.like + 1);
    //(this.totalVote ());
  }

  addUnlike = unlike =>{  
    //(this.like > 0 ? this.like-=1 : 0); 
    (this.unlike = this.unlike + 1);
    //(this.totalVote());
  }

  totalVote = () => { 
    this.total = this.like + this.unlike;
  }

  constructor(name) { 
    this.name = name;
  }
}