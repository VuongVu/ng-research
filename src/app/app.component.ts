import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private meta: Meta) {
    meta.addTags([
      { name: 'author', content: 'Vuong Vu' },
      { name: 'keywords', content: 'angular awesome, angular 4' },
      {
        name: 'description',
        content: 'Angular Awesome',
      },
    ]);
  }
}
