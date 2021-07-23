import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    
    this.spotify.searchArtist(termino)
      .subscribe((data: any) => {        
        this.artists = data.artists.items;
        //console.log(data);
        
        console.log(this.artists);
        
      })    
  }

}
