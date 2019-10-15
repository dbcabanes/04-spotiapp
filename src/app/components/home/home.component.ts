import { Component, OnInit } from "@angular/core";
//EJ1
//import { HttpClient } from "@angular/common/http";
import { SptifyService } from "../../services/sptify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  msnError: string;
  constructor(private spotify: SptifyService) {
    this.loading = true;
    this.error = false;
    this.msnError;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        //console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      errorServicio => {
        this.loading = false;
        this.error = true;
        this.msnError = errorServicio.error.error.message;
      }
    );
  }

  // Aquí esta la logica del ejecicio 1
  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   this.http
  //     .get("https://restcountries.eu/rest/v2/lang/es")
  //     .subscribe((data: any) => {
  //       this.paises = data;
  //       console.log(data);
  //     });
  // }
}
