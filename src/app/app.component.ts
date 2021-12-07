import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercice-composants-produits';

  constructor(private service: ProduitService) {
  }

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.service.getData().subscribe((res) => {
      console.log('Response from the api is: ', res);
    }, (err) => {
      console.log(err)
    })
  }

}
