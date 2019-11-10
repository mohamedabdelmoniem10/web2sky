import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websky';
  constructor(private router: Router) {
  }
  home = false;
  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        if(event.url === "/"){
          this.home = false;
        }else{
          this.home = true;
        }
      }

    })
  }
}