import { Component } from '@angular/core';
import {GitsearcherService} from 'src/app/Gitsearch/gitsearcher.service'
import { GitsearchComponent } from 'src/app/gitsearch/gitsearch.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gitsearch';
}
