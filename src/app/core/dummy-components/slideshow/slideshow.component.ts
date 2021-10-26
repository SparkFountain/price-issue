import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './slide.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() slides!: Slide[];

  containerOffset!: number;
  isScrolling!: 'left' | 'right' | false;

  constructor() {}

  ngOnInit(): void {
    this.containerOffset = 0;
    this.isScrolling = false;
  }

  handleSelectSlide(characterName: string): void {
    console.log('[HANDLE SELECT CHARACTER]', characterName);
  }

  handleScrollDirection(direction: 'left' | 'right' | false): void {
    this.isScrolling = direction;
    this.performScrolling();
  }

  performScrolling(): void {
    this.containerOffset = this.isScrolling === 'left' ? 1 : -1;
  }
}
