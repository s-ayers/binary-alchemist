import { Component, OnInit } from '@angular/core';
import * as person from '../../app.json';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  references: any;
  constructor() {
    // const perObj = person as object;
    // if (perObj.hasOwnProperty('references')) {
    //   this.references = person['references'];
    // }
  }

  ngOnInit() {}
}
