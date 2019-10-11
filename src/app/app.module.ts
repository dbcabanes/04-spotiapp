import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistaComponent } from "./components/artista/artista.component";
import { NavbarComponent } from "./components/Shared/navbar/navbar.component";
// Importar
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
// Peticiones http
import { HttpClientModule } from "@angular/common/http";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
// Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //Peticiones http
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
