import { Component } from '@angular/core';
import {MessageService} from "../message.service";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailsComponent} from "../hero-details/hero-details.component";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages: string[] = [];

  constructor(public messageService: MessageService) {
  }

  getMessages(): void {
    this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }
}
