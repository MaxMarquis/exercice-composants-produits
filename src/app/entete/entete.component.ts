import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['../shared/shared.css', './entete.component.css']
})
export class EnteteComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
