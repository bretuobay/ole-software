import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
