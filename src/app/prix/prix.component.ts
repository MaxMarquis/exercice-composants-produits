import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['../shared/shared.css', './prix.component.css']
})
export class PrixComponent implements OnInit {
  @Input() prix: Object = []

  constructor() { }

  ngOnInit(): void {
  }

}
