import { Component } from '@angular/core';
import { Seccion2 } from '../../../../models/seccion2';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-producto-section2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-section2.component.html',
  styleUrl: './producto-section2.component.css'
})
export class ProductoSection2Component {
  public seccion2: Seccion2[]

  constructor() {
    this.seccion2 = [
      {
        id: "1K",
        img: "../../../assets/cardigan.webp",
        alt: "Cardigan Cozy, el abrigo ideal para tu bebé, tejido en un suave material liso que garantiza comodidad. ",
        titulo: "Cardigan Cozy",
        descripcion: "Cardigan Cozy, el abrigo ideal para tu bebé, tejido en un suave material liso que garantiza comodidad. ",
      },
      {
        id: "2K",
        img: "../../../assets/enterito largo.webp",
        alt: "Descubre el ENTERITO BYRON, un enterito de manga larga diseñado con botones en la parte frontal para facilitar el cambio del bebé. ",
        titulo: "Enterito Byron",
        descripcion: "Descubre el ENTERITO BYRON, un enterito de manga larga diseñado con botones en la parte frontal para facilitar el cambio del bebé. ",
      },
      {
        id: "3K",
        img: "../../../assets/enterito.webp",
        alt: " Descubre el ENTERITO CANDELARIA, un encantador enterito estampado de manga corta y pata corta sin pie, ideal para el verano.",
        titulo: "Enterito Candelaria",
        descripcion: " Descubre el ENTERITO CANDELARIA, un encantador enterito estampado de manga corta y pata corta sin pie, ideal para el verano.",
      },
      {
        id: "4K",
        img: "../../../assets/buzo1.webp",
        alt: "La campera Brianna es estampada con cierre en el delantero, hombros caidos, elastico en puños y cintura y ribb en cuello para mayor durabilidad.",
        titulo: "Buzo Brianna",
        descripcion: " La campera Brianna es estampada con cierre en el delantero, hombros caidos, elastico en puños y cintura y ribb en cuello para mayor durabilidad.",
      },
      {
        id: "5K",
        img: "../../../assets/vestido1.webp",
        alt: "Descubre el VESTIDO SERENITY, un encantador vestido de voile estampado, sin mangas y con botones delanteros para fácil acceso, perfecto para el verano. .",
        titulo: "Vestido Serenity",
        descripcion: " Descubre el VESTIDO SERENITY, un encantador vestido de voile estampado, sin mangas y con botones delanteros para fácil acceso, perfecto para el verano. .",
      },
      {
        id: "6K",
        img: "../../../assets/vestido2.webp",
        alt: "Vestido blanco con micro tul.",
        titulo: "Vestido Valery",
        descripcion: " Vestido blanco con micro tul.",
      },
      {
        id: "7K",
        img: "../../../assets/pantalon largo.webp",
        alt: "PANTALON BRIANNA, un pantalon estampado, largo, con cintura elastizada.",
        titulo: "Pantalon Brianna ",
        descripcion: " PANTALON BRIANNA, un pantalon estampado, largo, con cintura elastizada.",
      },
      {
        id: "8K",
        img: "../../../assets/pantalon corto.webp",
        alt: "Descubre los LEGGING CANDY, la opción perfecta para el verano de tu bebé.",
        titulo: "Legging Corta Candy",
        descripcion: " Descubre los LEGGING CANDY, la opción perfecta para el verano de tu bebé.",
      },
    ]


  }
}
