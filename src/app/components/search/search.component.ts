import { Component, OnInit } from "@angular/core";
import { SptifyService } from "../../services/sptify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  artistas: any[] = [];
  constructor(private spotify: SptifyService) {}

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.artistas = data.artists.items;
    });
  }
}
