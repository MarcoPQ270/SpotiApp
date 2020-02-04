import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

artista: any = {};
loading: boolean;
toptracks: any [] = [];
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
     // console.log(params['id']);
     this.loading = true;
     this.getArtista(params['id']);
     this.getArtistaTracks(params['id']);
    });
   }

   getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(data => {
       console.log(data);
       this.artista = data;
       this.loading = false;
     });

   }

   getArtistaTracks(id: string) {
      this.spotify.getArtistaTracks(id).subscribe( data => {
        console.log(data);
        this.toptracks = data;
      });
  }

}
