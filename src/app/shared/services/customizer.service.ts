import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {


  constructor() {

  }

  toggleDir(isRTL) {
    const html = document.getElementsByTagName('html')[0];
    const body = document.getElementsByTagName('body')[0];
    if (!html) {
      return;
    }

    if (!body) {
      return;
    }

    if (isRTL) {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('class', 'reverse');
      body.setAttribute('class', 'reverse');
    } else {
      html.removeAttribute('dir');
      html.removeAttribute('class');
      body.removeAttribute('class');
    }
  }

}
