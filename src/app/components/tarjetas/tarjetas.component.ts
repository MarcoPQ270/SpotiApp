import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

@Input() items: any [] = [];

  constructor() { }

  verArtista(item: any){

    let artistaid;

    if (item.type === 'artist'){
          artistaid = item.id;
    }else{
      artistaid = item.artists[0].id;
    }

    console.log(artistaid);
  }

}
