import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo para usar!');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      // Agregar el token aqui
      
    });    
    
    // Llamo a la api de Spotify para obtener los nuevos lanzamientos
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });    
  }


  searchArtist(termino: string) {

    const headers = new HttpHeaders({
      // Poner aca el token
      
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers });
  }
}
