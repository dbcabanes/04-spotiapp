import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchComponent } from "../search/search.component";
import { SptifyService } from "../../services/sptify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  loadingArtist = true;
  constructor(private router: ActivatedRoute, private sptify: SptifyService) {
    this.router.params.subscribe(params => {
      this.getArtista(params["id"]);
    });
  }
  getArtista(id: string) {
    this.loadingArtist = true;
    this.sptify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtist = false;
      console.log(artista);
    });
  }
}
