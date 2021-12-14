import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: ProduitService) { }

  ngOnInit() {

  }

}
