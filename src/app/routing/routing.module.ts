import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'


import { GitsearchComponent } from 'src/app/gitsearch/gitsearch.component';
import { RepositoriesComponent } from 'src/app/repositories/repositories.component';
import { GitsearchFormComponent } from 'src/app/gitsearch-form/gitsearch-form.component'

const routes:Routes=[
  {path:"gitsearch",component:GitsearchComponent},
  {path:"repositories",component:RepositoriesComponent}
]


@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
