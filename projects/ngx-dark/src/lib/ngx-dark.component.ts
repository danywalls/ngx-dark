import { Component, Input, OnInit } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-dark',
  templateUrl: './ngx-dark.component.html',
  styleUrls: ['./ngx-dark.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxDarkComponent implements OnInit {
  @Input() hideToggle: boolean;
  constructor() {}

  ngOnInit(): void {}

  toggleDark() {
    document.documentElement.classList.toggle('dark-mode');
  }
}
