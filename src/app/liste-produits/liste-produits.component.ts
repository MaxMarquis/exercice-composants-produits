import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProduitService } from '../produit.service';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['../shared/shared.css', './liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produits: Produit[] = [];
  constructor(private service: ProduitService) { }

  ngOnInit() {
    this.getDataFromApi();
  }
  getDataFromApi() {
    this.service.getData().subscribe((res) => {
      this.produits = res;
    }, () => {
      this.produits = PRODUITS
    })
  }
}
