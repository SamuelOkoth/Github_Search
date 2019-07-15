import { Component, OnInit } from '@angular/core';
import {Repository} from 'src/app/repository';
import {GitsearcherService} from 'src/app/Gitsearch/gitsearcher.service'
import {User} from 'src/app/user';
import { GitsearchComponent } from 'src/app/gitsearch/gitsearch.component';
import { AppComponent } from 'src/app/app.component';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  details: any ;
  repos:any;
  username: string;

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
