import { Component } from '@angular/core';
import { Seccion1 } from '../../../../models/seccion1';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-producto-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-section1.component.html',
  styleUrl: './producto-section1.component.css'
})
export class ProductoSection1Component {
  public seccion1: Seccion1[]

  constructor() {
    this.seccion1 = [
      {
        id: "9P",
        img: "../../../assets/buzoniño.webp",
        alt: "Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano. .",
        titulo: "Buzo Fenix",
        descripcion: " Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano.",
      },
      {
        id: "10P",
        img: "../../../assets/pantalonniño.webp",
        alt: "Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano.",
        titulo: "Buzo Fenix",
        descripcion: " Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano.",
      },
      {
        id: "11P",
        img: "../../../assets/bodyniño2.webp",
        alt: "Descubre la comodidad y estilo del BODY IKER, una remera de manga corta ideal para el verano, diseñada especialmente para niños .",
        titulo: "Body Iker",
        descripcion: "Descubre la comodidad y estilo del BODY IKER, una remera de manga corta ideal para el verano, diseñada especialmente para niños .",
      },
      {
        id: "12P",
        img: "../../../assets/camisa1.webp",
        alt: "Descubre la CAMISA MATT, una elegante camisa de lino rayada, perfecta para el verano.",
        titulo: "Camisa Matt",
        descripcion: "Descubre la CAMISA MATT, una elegante camisa de lino rayada, perfecta para el verano.",
      },
      {
        id: "13P",
        img: "../../../assets/camisa.webp",
        alt: "Descubre la CAMISA LOGAN, una elegante camisa de lino de manga larga, perfecta para el verano.",
        titulo: "Camisa Megan",
        descripcion: "Descubre la CAMISA LOGAN, una elegante camisa de lino de manga larga, perfecta para el verano.",
      },
      {
        id: "14P",
        img: "../../../assets/buzo1niño.webp",
        alt: "Descubre el SWEATER EBONY, una prenda de la colección verano que combina comodidad y estilo.",
        titulo: "Sweater Ebony",
        descripcion: "Descubre el SWEATER EBONY, una prenda de la colección verano que combina comodidad y estilo.",
      },
      {
        id: "15P",
        img: "../../../assets/bermudaniño.webp",
        alt: "Descubre la BERMUDA BLAS, ideal para el verano, diseñada especialmente para niños.",
        titulo: "Bermuda Blas",
        descripcion: "Descubre la BERMUDA BLAS, ideal para el verano, diseñada especialmente para niños.",
      },
      {
        id: "16P",
        img: "../../../assets/pijamaniño.webp",
        alt: "Descubre el PIJAMA DINO, la opción perfecta para el verano de tus niños.",
        titulo: "Pijama Dino",
        descripcion: "Descubre el PIJAMA DINO, la opción perfecta para el verano de tus niños.",
      }
    ]
  }
}
