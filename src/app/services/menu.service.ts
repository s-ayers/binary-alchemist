import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public primary$ = new BehaviorSubject([]);
  public secondary$ = new BehaviorSubject([]);

  items = [];
  constructor() { }

  public add(route: string, icon: string, menu: string = 'primary') {
    if (menu === 'primary') {
      const prime = this.primary$.getValue();
      prime.push({ route, icon });
      this.primary$.next(prime);
    }
    console.log(route, icon, menu);
    this.items.push({ route: icon, menu });
  }

  public get(menu: string = 'primary') {

    const ret = [];
    this.items.forEach(element => {
      if (element.menu === menu) {
        ret.push(element);
      }
    });

    return ret;
  }

  public getPrimary(): Observable<any[]> {
    console.log('Im inside getPrimary');
    return this.primary$;
  }
}
