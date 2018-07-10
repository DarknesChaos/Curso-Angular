import { Injectable } from '@angular/core';
/*import { Http } from '@angular/http';*/
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InformacionService {
  info: any = {};
  cargada = false;
  cargada_sobre_nosotros = false;
  equipo: any = [];

  constructor( private httpC: HttpClient) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.httpC.get('assets/data/info.pagina.json')
      .subscribe( data => {
        /*console.log(data);*/
        this.info = data;
        this.cargada = true;
      });
  }

  public carga_sobre_nosotros() {
    this.httpC.get('https://paginweb-8c882.firebaseio.com/equipo.json')
      .subscribe( data => {
        this.equipo = data;
        this.cargada_sobre_nosotros = true;
      });
  }
}
