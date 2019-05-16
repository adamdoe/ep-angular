import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer-copyright-line',
  templateUrl: './footer-copyright-line.component.html',
  styleUrls: ['./footer-copyright-line.component.less']
})
export class FooterCopyrightLineComponent implements OnInit {
  year = new Date().getFullYear();
  copy = this._sanitizer.bypassSecurityTrustHtml('Eaton Partners is a Division of Stifel, Nicolaus & Company, Incorporated, Member NYSE, & SIPC. Eaton Partners (UK) LLP is authorized and regulated by the Financial Conduct Authority (FCA). Eaton Partners Advisors (HK) Limited is regulated by the Hong Kong Securities and Futures Commission (SFC). Eaton Partners Advisors (HK) Limited is approved as a Type 1 License company under the Securities and Futures Commission (“SFC”) in Hong Kong. Eaton Partners and the Eaton Partners logo are trademarks of Eaton Partners, LLC, a limited liability company ® Eaton Partners, LLC, 2019.');

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

}
