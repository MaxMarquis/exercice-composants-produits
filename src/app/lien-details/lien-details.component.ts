import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lien-details',
  templateUrl: './lien-details.component.html',
  styleUrls: ['../shared/shared.css', './lien-details.component.css']
})
export class LienDetailsComponent implements OnInit {
  lien = "https://github.com/MaxMarquis"

  constructor() { }

  ngOnInit(): void {
  }

}
