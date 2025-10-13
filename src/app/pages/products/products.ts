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
        img: "../../../assets/comida pez.webp",
        alt: "El TetraFin Goldfish Flakes es un alimento desarrollado específicamente para peces goldfish, ofreciendo una dieta balanceada y de fácil digestión. ",
        titulo: "TetraFin Goldfish Flakes",
        descripcion: "El TetraFin Goldfish Flakes es un alimento desarrollado específicamente para peces goldfish, ofreciendo una dieta balanceada y de fácil digestión. ",
        anualPublicacion: 2026,
      },
      {
        id: "2L",
        img: "../../../assets/esponja marina.webp",
        alt: "El Repuesto de Esponja para Filtro Marina es esencial para mantener la calidad del agua en tu acuario. ",
        titulo: "Esponja Marina",
        descripcion: "El Repuesto de Esponja para Filtro Marina es esencial para mantener la calidad del agua en tu acuario. ",
        anualPublicacion: 2026,
      },
      {
        id: "3L",
        img: "../../../assets/clarificador.webp",
        alt: " Diseñado para eliminar rápidamente partículas suspendidas, residuos y nubes en el agua, este clarificador mejora la visibilidad y la calidad del ambiente acuático.",
        titulo: "Clarificador de Agua",
        descripcion: " Diseñado para eliminar rápidamente partículas suspendidas, residuos y nubes en el agua, este clarificador mejora la visibilidad y la calidad del ambiente acuático.",
        anualPublicacion: 2026,
      },
      {
        id: "4L",
        img: "../../../assets/limpiador magnetico.webp",
        alt: "El Limpiador Marina Magnético es una solución práctica y efectiva para mantener el vidrio de tu acuario limpio y libre de algas.",
        titulo: "Limpiador Magnetico",
        descripcion: " El Limpiador Marina Magnético es una solución práctica y efectiva para mantener el vidrio de tu acuario limpio y libre de algas.",
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
