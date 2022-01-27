import { Component } from '@angular/core';
import { person } from '../../app';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  public sites: any = person['social media'];
}
