import { Injectable } from '@angular/core';
/*import { Http } from '@angular/http';*/
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InformacionService {
  info: any = {};
  cargada = false;

  constructor( private httpC: HttpClient) {
    this.httpC.get('assets/data/info.pagina.json')
      .subscribe( data => {
        console.log(data);
        this.info = data;
        this.cargada = true;
      });

    /*this.http.get('assets/data/info.pagina.json')
      .subscribe( data => {
        console.log(data.json());
      });*/
  }
}
