import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['../shared/shared.css', './fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit, OnChanges {
  @Input() produit: Produit = { id: '', nom: '', description: '', prix: 0, qteStock: 0 };
  isBetween: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.between(1, 5);
  }

  between(num1: number, num2: number) {
    // console.log(`qteStock de ${this.produit.nom} dans le between: ${this.produit.qteStock}`)

    this.isBetween = this.produit && this.produit.qteStock >= num1 && this.produit.qteStock <= num2

  }
}
