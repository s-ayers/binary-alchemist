import { Component, OnInit } from '@angular/core';
import { person } from '../../app';

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
