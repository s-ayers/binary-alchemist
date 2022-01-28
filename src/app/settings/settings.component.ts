import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { MenuService } from '../services/menu.service';
import { Location } from '@angular/common';
import { ThemingService } from '../services/theming.service';
import { AlchemistThemeColor } from '../classes/alchemist-theme-color';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent extends PageComponent implements OnInit {
  routestring = '/settings';

  public themes: AlchemistThemeColor[];

  constructor(
    location: Location,
    menuService: MenuService,
    private themeService: ThemingService) {
    super(location, menuService);

  }

  ngOnInit(): void {
    this.themes = this.themeService.themes;
  }

  public setTheme(theme: string): void {
    this.themeService.Set(theme);
    this.themeService.Load(theme);
  }

}
