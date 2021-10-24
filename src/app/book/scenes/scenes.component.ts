import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss'],
})
export class ScenesComponent implements OnInit {
  nations!: {[key: string]: string[]};

  constructor() {}

  ngOnInit(): void {
    this.nations = {
      canada: ['vancouver', 'vancouver-island'],
      france: ['la-reunion'],
      germany: ['berlin', 'dresden', 'usedom'],
      'new-zealand': ['auckland', 'christchurch', 'ranfurly', 'russell'],
      portugal: ['madeira'],
      spain: ['gran-canaria']
    };
  }

  handleSelectNation(nation: string): void {
    console.log('[HANDLE SELECT NATION]', nation);
  }
}
