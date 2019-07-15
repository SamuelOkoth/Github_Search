import { Component, OnInit } from '@angular/core';
import {Repository} from 'src/app/repository';
import {User} from 'src/app/user';
import { GitsearcherService } from 'src/app/Gitsearch/gitsearcher.service'
import { GitsearchFormComponent } from 'src/app/gitsearch-form/gitsearch-form.component';
import { RepositoriesComponent } from 'src/app/repositories/repositories.component'

import { AppComponent } from 'src/app/app.component';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from 'src/app/routing/routing.module'


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  details: any;
  repos: any;
  username:string;
  

  constructor(private gitsearcherService: GitsearcherService) { }

  ngOnInit() {
  }
  findUser(){
    this.gitsearcherService.updateProfile(this.username);
    this.gitsearcherService.getProfileInfo(this.username).subscribe(details => {
      console.log(details);
      this.details = details;
    });
    this.gitsearcherService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
  })
}
}
