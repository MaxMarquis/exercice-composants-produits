import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ImageComponent } from './image/image.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { PiedPageComponent } from './pied-page/pied-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ListeProduitsComponent,
    FicheProduitComponent,
    ImageComponent,
    NomDescriptionComponent,
    PrixComponent,
    LienDetailsComponent,
    PiedPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
