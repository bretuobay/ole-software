import { Component, OnInit } from '@angular/core';
import { TUTORIALS } from './tutorials.mock';

@Component({
  selector: 'video-tutorials',
  templateUrl: './video-tutorials.component.html',
  styleUrls: ['./video-tutorials.component.scss']
})
export class VideoTutorialsComponent implements OnInit {
 public tutorialsList : any[] = TUTORIALS;
  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(event){
    console.log(event)
  }

}
