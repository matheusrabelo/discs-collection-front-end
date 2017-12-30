import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionsInfoComponent } from './collections/collections-info/collections-info.component';
import { CollectionsAddComponent } from './collections/collections-add/collections-add.component';

const routes: Routes = [
  { path: '', component: CollectionsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'collections/add', component: CollectionsAddComponent },
  { path: 'collections/:id', component: CollectionsInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionsInfoComponent,
    CollectionsAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
