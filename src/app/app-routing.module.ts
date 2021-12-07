import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauProduitsComponent } from './tableau-produits/tableau-produits.component';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';

const routes: Routes = [
  { path: 'tableau', component: TableauProduitsComponent },
  { path: '', component: ListeProduitsComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
