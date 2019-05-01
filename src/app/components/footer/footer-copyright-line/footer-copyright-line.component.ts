import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer-copyright-line',
  templateUrl: './footer-copyright-line.component.html',
  styleUrls: ['./footer-copyright-line.component.less']
})
export class FooterCopyrightLineComponent implements OnInit {

  copy = this._sanitizer.bypassSecurityTrustHtml('&reg; EATON PARTNERS, YEAR. Eaton Partners, is a wholly owned subsidiary and affiliate of <a href="http://www.stifel.com/">Stifel Financial Corp.</a>');

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

}
