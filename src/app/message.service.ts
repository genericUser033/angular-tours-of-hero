import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  addMessages(message:string) {
    this.messages.push(message);
  }

  getMessages(): Observable<string[]> {
    return of(this.messages);
  }

  clearMessages(): void {
    this.messages = [];
  }
}
