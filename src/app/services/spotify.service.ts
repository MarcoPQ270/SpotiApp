import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Sporify Service Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
     'Authorization': 'Bearer BQDj09Ea2t3CdyAJjJcmls0wm0Lrb3Er6NRJXlwaWSmwb3MggLl4kIS9H7intGF_h4apGhe-gPksUJh01AQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }
}
