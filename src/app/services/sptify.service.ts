import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SptifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify service listo");
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBdnKL2x9olyjFO5Fj9QTQ1-nM9Dx1cfCKeAC3CrHZKBRZ7Nc7wx3WHcDEld5tXg8HGogAaBZtMcuEHivo"
    });
    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      {
        headers
      }
    );
  }
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBdnKL2x9olyjFO5Fj9QTQ1-nM9Dx1cfCKeAC3CrHZKBRZ7Nc7wx3WHcDEld5tXg8HGogAaBZtMcuEHivo"
    });
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers
      }
    );
  }
}
