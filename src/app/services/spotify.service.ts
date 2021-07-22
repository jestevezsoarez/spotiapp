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
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', { headers })
      .subscribe(data => {
        console.log(data);        
      }); 
    
  }

}
