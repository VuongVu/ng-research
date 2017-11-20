import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;

  constructor(private router: Router, private meta: Meta) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    meta.addTags([
      { name: 'author', content: 'Vuong Vu' },
      { name: 'keywords', content: 'angular awesome, angular 4' },
      {
        name: 'description',
        content: 'Angular Awesome',
      },
    ]);
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
