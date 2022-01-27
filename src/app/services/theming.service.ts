import { Injectable } from '@angular/core';
import { AlchemistThemeColor } from '../classes/alchemist-theme-color';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  public themes: AlchemistThemeColor[] = [];
  protected ThemePath = 'assets/themes';
  constructor() {

    this.themes.push(new AlchemistThemeColor('Blue', '', '#0087F7'));
    this.themes.push(new AlchemistThemeColor('Dark Blue', '', '#3B5998'));
    this.themes.push(new AlchemistThemeColor('Gray', '', '#888'));
    this.themes.push(new AlchemistThemeColor('Green', '', '#B1CD00'));
    this.themes.push(new AlchemistThemeColor('Light Green', '', '#43B6B1'));
    this.themes.push(new AlchemistThemeColor('Olive Green', '', '#496A15'));
    this.themes.push(new AlchemistThemeColor('Orange', '', '#FF4343'));
    this.themes.push(new AlchemistThemeColor('Red', '', '#fe000a'));
    this.themes.push(new AlchemistThemeColor('Rose', '', '#EF3E96'));
    this.themes.push(new AlchemistThemeColor('Yellow', '', '#FDB000'));
  }

  public Load(theme: string): void {

    if (theme.length === 0) {
      theme = localStorage.getItem('alchemist-theme') || 'Dark Blue';
    }

    $('#AlchemistThemeColorCSS').attr('id', 'AlchemistThemeColorCSS_OLD');
    const cssName = theme.toLowerCase().replace(' ', '-');
    const themeCssFile = this.ThemePath + '/' + cssName + '.css';
    const themeCssLink = $(`<link id="AlchemistThemeColorCSS" type="text/css" rel="stylesheet" href="${themeCssFile}" />`);

    $('head').append(themeCssLink);

    window.setTimeout(() => {
      $('AlchemistThemeColorCSS_OLD').remove();
    }, 4000);
  }

  public Set(theme: string): void {
    localStorage.setItem('alchemist-theme', theme);
  }
}
