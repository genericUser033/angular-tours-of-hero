import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/in-memory-data.service";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
