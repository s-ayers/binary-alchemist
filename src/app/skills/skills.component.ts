import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  ngOnInit(): void {

    $('.skillbar').each(function() {
      $(this).find('.skillbar-bar').width(0);
    });

    $('.skillbar').each(function() {
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      }, 2000);
    });

  }

}
