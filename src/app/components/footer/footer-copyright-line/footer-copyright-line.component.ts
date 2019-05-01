import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-copyright-line',
  templateUrl: './footer-copyright-line.component.html',
  styleUrls: ['./footer-copyright-line.component.less']
})
export class FooterCopyrightLineComponent implements OnInit {

  copy: string = '&reg; EATON PARTNERS, YEAR. Eaton Partners, is a wholly owned subsidiary and affiliate of <a href="http://www.stifel.com/">Stifel Financial Corp.</a>';

  constructor() { }

  ngOnInit() {
  }

}
