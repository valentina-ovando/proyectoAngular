import { Component } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
/*
FormControl = controlador de cada dato ingresado en el formulario
FormGroup = directiva para formularios reactivos en Angular, agrupa FormControl
ReactiveFormsModule = permite hacer uso de formularios reactivos
Validators = valida datos ingresados en un formulario */
@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  //propiedades PRIVADA -> informacion sensible 
  private contadorId = 1;

  //Coleccion de productos de tipo PRODUCTO 
  coleccionProductos: Producto[] = [];

  //Instancia que se vincula con el formulario desde el HTML
  /*nombrePropiedad: new Control ->
    string -> '' / number -> null
    Validators.required -> validado como valor requerido estrictamente*/

  nuevoProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)

  })

  /**
   * @description Metodo de creacion de productos segun interfaz "Producto"
    */
  crearProducto(): void {
    if (this.nuevoProducto.valid) {
      const nuevoProducto: Producto = {
        //id -> asignamos contador para que sea autoincrementable
        id: this.contadorId++,
        /* resto de propiedades, asignamos desde el formulario el valor que se recibiodesde su casilla o formControl*/
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!
      }

      this.coleccionProductos.push(nuevoProducto)

      console.log("Producto agregado: ", nuevoProducto)
      console.log("Coleccion actual de productos: ", this.coleccionProductos)

      //Reseteamos el formulario
      this.nuevoProducto.reset();
    }
  }
}
