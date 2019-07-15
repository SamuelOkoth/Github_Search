import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {RoutingModule} from './routing/routing.module'

import { GitsearcherService } from 'src/app/Gitsearch/gitsearcher.service'


import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { GitsearchComponent } from 'src/app/gitsearch/gitsearch.component';
import { RepositoriesComponent } from 'src/app/repositories/repositories.component';
import { ColourDirective } from './colour.directive';
import { DateCountPipe } from './date-count.pipe';


const routes:Routes=[
  {path:"gitsearch",component:GitsearchComponent},
  {path:"repositories",component:RepositoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GitsearchFormComponent,
    GitsearchComponent,
    RepositoriesComponent,
    ColourDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RoutingModule,
  ],
  providers: [GitsearcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
