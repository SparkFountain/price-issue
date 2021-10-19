import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss'],
})
export class ScenesComponent implements OnInit {
  nations!: string[];

  constructor() {}

  ngOnInit(): void {
    this.nations = [
      'canada',
      'france',
      'germany',
      'new-zealand',
      'portugal',
    ];
  }
}
