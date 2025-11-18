import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products {

  public infoTarjeta: Tarjeta[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1L",
        img: "../../../assets/cardigan.webp",
        alt: "Cardigan Cozy, el abrigo ideal para tu bebé, tejido en un suave material liso que garantiza comodidad. ",
        titulo: "Cardigan Cozy",
        descripcion: "Cardigan Cozy, el abrigo ideal para tu bebé, tejido en un suave material liso que garantiza comodidad. ",
        anualPublicacion: 2026,
      },
      {
        id: "2L",
        img: "../../../assets/enterito largo.webp",
        alt: "Descubre el ENTERITO BYRON, un enterito de manga larga diseñado con botones en la parte frontal para facilitar el cambio del bebé. ",
        titulo: "Enterito Byron",
        descripcion: "Descubre el ENTERITO BYRON, un enterito de manga larga diseñado con botones en la parte frontal para facilitar el cambio del bebé. ",
        anualPublicacion: 2026,
      },
      {
        id: "3L",
        img: "../../../assets/enterito.webp",
        alt: " Descubre el ENTERITO CANDELARIA, un encantador enterito estampado de manga corta y pata corta sin pie, ideal para el verano.",
        titulo: "Enterito Candelaria",
        descripcion: " Descubre el ENTERITO CANDELARIA, un encantador enterito estampado de manga corta y pata corta sin pie, ideal para el verano.",
        anualPublicacion: 2026,
      },
      {
        id: "4L",
        img: "../../../assets/buzo1.webp",
        alt: "La campera Brianna es estampada con cierre en el delantero, hombros caidos, elastico en puños y cintura y ribb en cuello para mayor durabilidad.",
        titulo: "Buzo Brianna",
        descripcion: " La campera Brianna es estampada con cierre en el delantero, hombros caidos, elastico en puños y cintura y ribb en cuello para mayor durabilidad.",
        anualPublicacion: 2026,

      },
      {
        id: "5L",
        img: "../../../assets/vestido1.webp",
        alt: "Descubre el VESTIDO SERENITY, un encantador vestido de voile estampado, sin mangas y con botones delanteros para fácil acceso, perfecto para el verano. .",
        titulo: "Vestido Serenity",
        descripcion: " Descubre el VESTIDO SERENITY, un encantador vestido de voile estampado, sin mangas y con botones delanteros para fácil acceso, perfecto para el verano. .",
        anualPublicacion: 2026,

      },
      {
        id: "6L",
        img: "../../../assets/vestido2.webp",
        alt: "Vestido blanco con micro tul.",
        titulo: "Vestido Valery",
        descripcion: " Vestido blanco con micro tul.",
        anualPublicacion: 2026,

      },
      {
        id: "7L",
        img: "../../../assets/pantalon largo.webp",
        alt: "PANTALON BRIANNA, un pantalon estampado, largo, con cintura elastizada.",
        titulo: "Pantalon Brianna ",
        descripcion: " PANTALON BRIANNA, un pantalon estampado, largo, con cintura elastizada.",
        anualPublicacion: 2026,

      },
      {
        id: "8L",
        img: "../../../assets/pantalon corto.webp",
        alt: "Descubre los LEGGING CANDY, la opción perfecta para el verano de tu bebé.",
        titulo: "Legging Corta Candy",
        descripcion: " Descubre los LEGGING CANDY, la opción perfecta para el verano de tu bebé.",
        anualPublicacion: 2026,

      },
      {
        id: "9L",
        img: "../../../assets/buzoniño.webp",
        alt: "Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano. .",
        titulo: "Buzo Fenix",
        descripcion: " Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano. .",
        anualPublicacion: 2026,

      },
      {
        id: "10L",
        img: "../../../assets/pantalonniño.webp",
        alt: "Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano. .",
        titulo: "Buzo Fenix",
        descripcion: " Descubre el BUZO FENIX, un cómodo buzo con capucha y cierre, ideal para el verano. .",
        anualPublicacion: 2026,
      },
      {
        id: "11L",
        img: "../../../assets/bodyniño2.webp",
        alt: "Descubre la comodidad y estilo del BODY IKER, una remera de manga corta ideal para el verano, diseñada especialmente para niños .",
        titulo: "Body Iker",
        descripcion: "Descubre la comodidad y estilo del BODY IKER, una remera de manga corta ideal para el verano, diseñada especialmente para niños .",
        anualPublicacion: 2026,
      },
      {
        id: "12L",
        img: "../../../assets/camisa1.webp",
        alt: "Descubre la CAMISA MATT, una elegante camisa de lino rayada, perfecta para el verano.",
        titulo: "Camisa Matt",
        descripcion: "Descubre la CAMISA MATT, una elegante camisa de lino rayada, perfecta para el verano.",
        anualPublicacion: 2026,
      },
      {
        id: "13L",
        img: "../../../assets/camisa.webp",
        alt: "Descubre la CAMISA LOGAN, una elegante camisa de lino de manga larga, perfecta para el verano.",
        titulo: "Camisa Megan",
        descripcion: "Descubre la CAMISA LOGAN, una elegante camisa de lino de manga larga, perfecta para el verano.",
        anualPublicacion: 2026,
      },
      {
        id: "14L",
        img: "../../../assets/buzo1niño.webp",
        alt: "Descubre el SWEATER EBONY, una prenda de la colección verano que combina comodidad y estilo.",
        titulo: "Sweater Ebony",
        descripcion: "Descubre el SWEATER EBONY, una prenda de la colección verano que combina comodidad y estilo.",
        anualPublicacion: 2026,
      },
      {
        id: "15L",
        img: "../../../assets/bermudaniño.webp",
        alt: "Descubre la BERMUDA BLAS, ideal para el verano, diseñada especialmente para niños.",
        titulo: "Bermuda Blas",
        descripcion: "Descubre la BERMUDA BLAS, ideal para el verano, diseñada especialmente para niños.",
        anualPublicacion: 2026,
      },
      {
        id: "16L",
        img: "../../../assets/pijamaniño.webp",
        alt: "Descubre el PIJAMA DINO, la opción perfecta para el verano de tus niños.",
        titulo: "Pijama Dino",
        descripcion: "Descubre el PIJAMA DINO, la opción perfecta para el verano de tus niños.",
        anualPublicacion: 2026,
      }
    ]
  }

  /*variable para tomar una tarjeta seleccionada */
  tarjetaSeleccionada?: any = null;

  /*recibe el elemento seleccionado por parametro y la asigna a "tarjetaSeleccionada" */
  verMas(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}


