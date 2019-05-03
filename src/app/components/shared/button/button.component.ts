import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  
  @Input('type') type: string;
  @Input('text') text: string;
  constructor() { }

  ngOnInit() {
  }

}
