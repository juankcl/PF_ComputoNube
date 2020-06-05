import { Component, OnInit } from '@angular/core';
import { datosJuego } from '../datosJuego';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})

export class ImageViewerComponent implements OnInit {
  index: number = 0;

  juegoMostrar: datosJuego;

  aux: datosJuego;
  juegos: datosJuego[] = [
    { id: 0, titulo: "Nier Automata", desc: "Super desc1", imagen: "https://cdn3.dualshockers.com/wp-content/uploads/2018/12/NieR.jpg", precio: 999.99 }
  ];

  constructor() { }

  ngOnInit() {

    /*
      Por ahora están hard codeados los juegos que se muestran
    */
    this.aux = { id: 1, titulo: "Monster Hunter: World", desc: "Super desc2", imagen: "https://www.cgmagonline.com/wp-content/uploads/2018/08/monster-hunter-world-pc-review.jpg", precio: 999.99 };
    this.juegos.push(this.aux);

    this.aux = { id: 2, titulo: "Doom Eternal", desc: "Super desc3", imagen: "https://i.ytimg.com/vi/NA8tzzWcibk/maxresdefault.jpg", precio: 999.99 };
    this.juegos.push(this.aux);

    this.juegoMostrar = this.juegos[this.index];
  }

  siguienteJuego() {
    this.index++;
    if (this.index > this.juegos.length - 1) {
      this.index = 0;
    }
    console.log(this.index)
    this.juegoMostrar = this.juegos[this.index];
  }

  anteriorJuego() {
    this.index--;
    if (this.index < 0) {
      this.index = this.juegos.length - 1;
    }

    this.juegoMostrar = this.juegos[this.index];
  }

}
