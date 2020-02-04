import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

nuevascanciones: any [] = [];
loading: boolean;
MensajeError: string;

error: boolean;
  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
         console.log(data);
         this.nuevascanciones = data;
         this.loading = false;
    }, (errorService) => {
      this.loading = false;
      this.error = true;
      this.MensajeError = errorService.error.error.message ;
    });
  }


}
