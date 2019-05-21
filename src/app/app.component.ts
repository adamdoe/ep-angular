import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  title = 'ep-angular';

  constructor(private router: Router) {}
  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scrollTo(0,0));
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
