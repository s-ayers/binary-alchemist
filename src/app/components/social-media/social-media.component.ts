import { Component, OnInit } from '@angular/core';
import * as person from '../../app.json';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  public sites: any = person['social media'];
  constructor() {}

  ngOnInit() {}
}
