import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { MenuService } from '../services/menu.service';
import { Location } from '@angular/common';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { ThemingService } from '../services/theming.service';
import { AlchemistThemeColor } from '../classes/alchemist-theme-color';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends PageComponent implements OnInit {
  routestring = '/settings';

  public themes: AlchemistThemeColor[];

  constructor(
    mScrollbarService: MalihuScrollbarService,
    location: Location,
    menuService: MenuService,
    private themeService: ThemingService) {
    super(mScrollbarService, location, menuService);

  }

  ngOnInit(): void {
    this.themes = this.themeService.themes;
  }

  public setTheme(theme: string) {
    this.themeService.Set(theme);
    this.themeService.Load(theme);
  }

}
