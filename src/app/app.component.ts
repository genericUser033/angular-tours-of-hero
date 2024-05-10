import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {MessagesComponent} from "./messages/messages.component";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  imports: [
    RouterOutlet,
    HeroesComponent,
    MessagesComponent,
    RouterLink,
    NgIf,
    HttpClientModule,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  isShown : boolean = true;

  isShownUpdate(): boolean {
    this.isShown = false;
    return this.isShown;
  }
}
