import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { NewProductComponent } from './pages/products/secciones/new-product/new-product.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ProductoSection1Component } from './pages/products/secciones/producto-section1/producto-section1.component';
import { ProductoSection2Component } from './pages/products/secciones/producto-section2/producto-section2.component';
import { Products } from './pages/products/products';
export const routes: Routes = [
    /*definimos ruta general o raiz en especifico que nos lleve a la ruta home */
    {path: "", component: Home },
    {path: `inicio`, component: Home},
    {path: `terminos-condiciones`, component: About},
    {path: `contacto`, component: Contact},
    {path: "new-products", component: NewProductComponent},
    {path: "galeria", component: Products },
    {path: "oferta", component: OfertaComponent},
    {path: "seccion-niños", component: ProductoSection1Component},
    {path: "seccion-niñas", component: ProductoSection2Component},
    {path: "ubicacion", component: UbicacionComponent}

    
];
