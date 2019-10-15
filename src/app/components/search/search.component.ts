import { Component, OnInit } from "@angular/core";
import { SptifyService } from "../../services/sptify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  loading: boolean;
  artistas: any[] = [];
  constructor(private spotify: SptifyService) {}

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.loading = false;

      this.artistas = data;
    });
  }
}
