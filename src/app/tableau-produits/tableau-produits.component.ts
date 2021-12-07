import { Component, Input } from '@angular/core';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';

@Component({
  selector: 'app-tableau-produits',
  templateUrl: './tableau-produits.component.html',
  styleUrls: ['./tableau-produits.component.css']
})
export class TableauProduitsComponent {
  @Input() produits: Produit[] = PRODUITS
  displayedColumns: string[] = ['nom', 'prix', 'qteStock'];
  dataSource = this.produits;
}