import { Component, Input, OnInit } from '@angular/core';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['../shared/shared.css', './fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  @Input() produit: Produit = { id: '0', nom: '', description: '', prix: 0, qteStock: 0 };

  constructor() { }

  ngOnInit(): void {

  }

}
