import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // paises: any[] = [];

  constructor( private spotify: SpotifyService ) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (data: any[]) => {
    //     this.paises = data;        
    //   })   
    this.spotify.getNewReleases();
  }
  

  ngOnInit(): void {
  }

}
