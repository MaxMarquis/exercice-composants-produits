import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private produitUrl = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  getData(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitUrl)
  }
}
