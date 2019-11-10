import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = false;
  }
  withBorder= false;
  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        
        if(event.url === "/" || event.url === "/header"){
          this.withBorder = false;
        }else{
          this.withBorder = true;
        }
      }

    })
  }

}
