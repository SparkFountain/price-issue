import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './slide.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() slides!: Slide[];
  activeSlides!: Slide[];
  activeSlideIndex!: number;

  constructor() {}

  ngOnInit(): void {
    if (!this.slides) {
      console.error('No slides provided');
    }

    if (!Array.isArray(this.slides) || this.slides.length < 3) {
      console.error('Invalid slides data (must have at least 3 elements)');
    }

    this.activeSlides = this.slides.slice(0, 3);
    this.activeSlideIndex = 1;
  }

  handleSelectSlide(characterName: string): void {
    console.log('[HANDLE SELECT CHARACTER]', characterName);
  }

  swipe(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      if (this.activeSlideIndex === 0) {
        this.activeSlideIndex--;
      } else {
        this.activeSlideIndex = this.slides.length - 1;
      }
    }

    if (direction === 'right') {
      if (this.activeSlideIndex === this.slides.length - 1) {
        this.activeSlideIndex = 0;
      } else {
        this.activeSlideIndex++;
      }
    }

    this.activeSlides = [
      this.slides[
        this.activeSlideIndex === 0
          ? this.slides.length - 1
          : this.activeSlideIndex - 1
      ],
      this.slides[this.activeSlideIndex],
      this.slides[
        this.activeSlideIndex < this.slides.length - 1
          ? this.activeSlideIndex + 1
          : 0
      ],
    ];
  }
}
