import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
  inputs: ['username']
})
export class ChatInputComponent implements OnInit {

  private username = 'Default username';
  constructor() { }

  ngOnInit() {
  }

}
