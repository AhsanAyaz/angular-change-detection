import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-box',
  templateUrl: './mini-box.component.html',
  styleUrls: ['./mini-box.component.scss']
})
export class MiniBoxComponent implements OnInit {
  @Input() coordinates;
  constructor() { }

  ngOnInit() {
  }

}
