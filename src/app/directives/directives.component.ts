import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showSecret = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDeyails() {
    this.showSecret = !this.showSecret;
    this.logs.push(new Date());
  }
}
