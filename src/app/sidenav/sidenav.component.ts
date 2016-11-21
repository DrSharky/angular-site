import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('openClose',
      [
        state('collapsed', style({ width: '100px' })),
        state('expanded', style({ width: '250px' })),
        transition('collapsed => expanded', [animate(250, style({ width: '250px' })), animate(250)]),
        transition('expanded => collapsed', [animate(250, style({ width: '100px' })), animate(250)]),
        state('menuClosed', style({ opacity: 1, cursor: 'pointer' })),
        state('menuOpened', style({ opacity: 0, cursor: 'default' })),
        transition('menuClosed <=> menuOpened', [animate(250, style({ opacity: 0.0 })), animate(250)]),
      ]
    ),

  ]
})
export class SidenavComponent implements OnInit {

  sidenavState: string;
  closeButtonState: string;
  menuButtonState: string;

  expand() {
    this.sidenavState = 'expanded';
    this.menuButtonState = 'menuOpened';
    this.closeButtonState = 'menuClosed';
  }

  collapse() {
    this.sidenavState = 'collapsed';
    this.menuButtonState = 'menuClosed';
    this.closeButtonState = 'menuOpened';
  }


  constructor() { this.collapse(); }

  ngOnInit() {

  }
}
