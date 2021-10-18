import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-nom-description',
  templateUrl: './nom-description.component.html',
  styleUrls: ['./nom-description.component.css']
})
export class NomDescriptionComponent implements OnInit {
  @Input() produit: Produit = { id: '0', nom: '', description: '', prix: 0 };
  constructor() { }

  ngOnInit(): void {
  }

}
