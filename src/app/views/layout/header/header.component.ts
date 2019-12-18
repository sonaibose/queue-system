import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {CustomizerService} from '../../../shared/services/customizer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  availableLanguages: any[] = [
    {label: 'AR', value: 'ar'},
    {label: 'EN', value: 'en'}
  ];
  selectedLanguage = 'en';

  constructor(private customizer: CustomizerService) { }

  ngOnInit() {
  }


  onLanguageChange() {

    sessionStorage.setItem('language', this.selectedLanguage);

    // window.location.reload();
    this.loadTheLanguage();
  }

  loadTheLanguage() {
    switch (this.selectedLanguage) {
      case 'ar':
        $('head').append('<link rel=\'stylesheet\' href=assets/rtl.css \' type=\'text/css\' />');
        this.customizer.toggleDir(true);
        break;
      case 'en':
        $('link[href=\'assets/rtl.css\']').remove();
        this.customizer.toggleDir(false);
        break;
    }
  }

}
