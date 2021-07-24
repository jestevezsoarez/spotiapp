import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo para usar!');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      
      // Agregar aca el token
      
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    // Llamo a la api de Spotify para obtener los nuevos lanzamientos
    
    return this.getQuery('browse/new-releases')
      .pipe( map( data => {
        return data['albums'].items
      }));    
  }


  searchArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)    
      .pipe( map( data => {
        return data['artists'].items
      }));
  }
}
