import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.less']
})
export class PreFooterComponent implements OnInit {

  prefooterData = {
    message: 'READY TO LEARN MORE?'
  }
  constructor() { }

  ngOnInit() {
  }

}
