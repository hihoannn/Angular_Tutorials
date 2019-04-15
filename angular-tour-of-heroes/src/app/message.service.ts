import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor() {}
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    console.log("MessageService clear() run.")
    this.messages = [];
  }
}