import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Sporify Service Listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBDFdMF0pGLakyfEaSEF024RaCEolQLqFEmIyoMkN-htpxJmJQtXD_k_i-o9z7gn2U0lJEWYhFbQmdeQCg'
     });
    return this.http.get(url, {headers});
  }

  getNewReleases() {

       return this.getQuery('browse/new-releases')
                   .pipe( map( data => data['albums'].items));

  }
  getArtista(termino: string) {
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
               .pipe(map( data => data['artists'].items));
   
  }
}
