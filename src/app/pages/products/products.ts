import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  public infoTarjeta: Tarjeta[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1L",
        img: "../../../assets/pez dragon.jpg",
        alt: "Es un pez que habita en aguas salobres de America",
        titulo: "Pez Dragon Gobio",
        descripcion: "Es un pez que habita en aguas salobres de America",
        anualPublicacion: 2026,
      },
      {
        id: "2L",
        img: "../../../assets/pez disco.jpg",
        alt: "Es un pez de agua dulce originario de las zonas bajas del rio Amazonas.",
        titulo: "Pez Disco",
        descripcion: "Es un pez de agua dulce originario de las zonas bajas del rio Amazonas.",
        anualPublicacion: 2026,
      },
      {
        id: "3L",
        img: "../../../assets/pez guppy.jpg",
        alt: "Es un pez de agua dulce.Famoso por su facil cuidado y reproduccion.",
        titulo: "Pez Guppy",
        descripcion: "Es un pez de agua dulce. Famoso por su facil cuidado y reproduccion.",
        anualPublicacion: 2026,
      },
    ]
  }

  /*variable para tomar una tarjeta seleccionada */
  tarjetaSeleccionada?:any = null;

  /*recibe el elemento seleccionado por parametro y la asigna a "tarjetaSeleccionada" */
  verMas(tarjeta: any){
    this.tarjetaSeleccionada = tarjeta;
  }
}
