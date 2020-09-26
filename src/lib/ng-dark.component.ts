import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-dark',
  templateUrl: './ng-dark.component.html',
  styleUrls: ['./ng-dark.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgDarkComponent implements OnInit {
  @Input() hideToggle: boolean;
  constructor() {}

  ngOnInit(): void {}

  toggleDark() {
    document.documentElement.classList.toggle('dark-mode');
  }
}
