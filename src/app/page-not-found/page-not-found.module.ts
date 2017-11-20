import { NgModule } from '@angular/core';

import { PageNotFoundRoutes } from './page-not-found.routing';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

@NgModule({
  imports: [PageNotFoundRoutes],
  declarations: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
