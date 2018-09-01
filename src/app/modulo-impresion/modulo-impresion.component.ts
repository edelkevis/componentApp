import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modulo-impresion',
  templateUrl: './modulo-impresion.component.html',
  styleUrls: ['./modulo-impresion.component.css']
})
export class ModuloImpresionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() title:string;
  @Input() output:string;

}
