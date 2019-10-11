import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SptifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify service listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDE12uaP0TeCvoSv9w-WaLmPzQlAo7Z7UV9oOkWXjLTmCD2OTTh-bUufC6o-PBUJ0vJR-17IRx_3ZxOyiU"
    });

    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
}
