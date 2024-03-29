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

  public add(route: string, icon: string, menu = 'primary'): void {
    if (menu === 'primary') {
      const prime = this.primary$.getValue();
      prime.push({ route, icon });
      this.primary$.next(prime);
    }
    this.items.push({ route: icon, menu });
  }

  public get(menu = 'primary') {

    const ret = [];
    this.items.forEach(element => {
      if (element.menu === menu) {
        ret.push(element);
      }
    });

    return ret;
  }

  public getPrimary(): Observable<any[]> {
    return this.primary$;
  }
}
