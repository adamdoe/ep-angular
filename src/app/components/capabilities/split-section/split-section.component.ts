import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-split-section',
  templateUrl: './split-section.component.html',
  styleUrls: ['./split-section.component.less']
})
export class SplitSectionComponent implements OnInit {
  @Input() columnTitleLeft
  @Input() columnTitleRight
  @Input() columnContentRight
  @Input() columnContentLeft
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.columnContentLeft = this._sanitizer.bypassSecurityTrustHtml(this.columnContentLeft);
    this.columnContentRight = this._sanitizer.bypassSecurityTrustHtml(this.columnContentRight);

    console.log('cr', this.columnContentRight)
  }

}
