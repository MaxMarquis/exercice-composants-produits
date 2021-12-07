import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ImageComponent } from './image/image.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TableauProduitsComponent } from './tableau-produits/tableau-produits.component';

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
    PiedPageComponent,
    TableauProduitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
