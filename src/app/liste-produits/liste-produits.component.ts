import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['../shared/shared.css', './liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  @Input() produits: Produit[] = PRODUITS;

  constructor() { }

  ngOnInit(): void {
  }
}
