import { Component } from '@angular/core';
import { Sidepanel } from "./sidepanel/sidepanel";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [Sidepanel, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
