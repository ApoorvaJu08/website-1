import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { 
    $('#carousel-example-generic').on('slid.bs.carousel', function () {
      $(".carousel-item.active:nth-child(" + ($(".carousel-inner .carousel-item").length -1) + ") + .carousel-item").insertBefore($(".carousel-item:first-child"));
      $(".carousel-item.active:last-child").insertBefore($(".carousel-item:first-child"));
    });   
  }
  

  ngOnInit() {
    
  }

  
}
