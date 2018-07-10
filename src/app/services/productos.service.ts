import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: any = [];
  cargando = false;
  constructor( private httpC: HttpClient ) {
    this.cargar_productos();
  }

  public cargar_producto ( cod: String ) {
    return this.httpC.get(`https://paginweb-8c882.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos() {
    this.cargando = true;
    this.httpC.get('https://paginweb-8c882.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        console.log(res);
        setTimeout( () => {
          this.cargando = false;
          this.productos = res;
        }, 1500 );
      });
  }
}
