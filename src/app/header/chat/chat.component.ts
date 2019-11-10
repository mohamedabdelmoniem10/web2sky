import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  chatBtn;
  signup = true;
  login;
  chat(e) {
    console.log(e)
    this.chatBtn = true;
  }
  closeChat() {
    this.chatBtn = false;
  }
  signUp() {
    this.signup = true;
    this.login = false;
  }
  logIn() {
    this.login = true;
    this.signup = false;
  }
  ngOnInit() {
  }

}
