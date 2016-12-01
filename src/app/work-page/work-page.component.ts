import { Component, OnInit } from '@angular/core';
import { ChatDisplayComponent} from '../chat-display/chat-display.component';
import { ChatInputComponent } from '../chat-input/chat-input.component';

@Component({
  selector: 'work-page',
  templateUrl: 'work-page.component.html',
  styleUrls: ['./work-page.component.css'],
})
export class WorkPageComponent implements OnInit {

  private hasUsername = false;
  private username: string;



  constructor() { }

  ngOnInit() {
  }
}
