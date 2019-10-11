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
    this.http
      .get("https://api.spotify.com/v1/browse/new-releases?limit=5", {
        headers
      })
      .subscribe(data => {
        console.log(data);
      });
  }
}
