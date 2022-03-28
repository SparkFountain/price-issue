import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Slide } from './slide.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() slides!: Slide[];
  @ViewChild('slideContainer') slideContainer!: ElementRef<HTMLDivElement>;

  containerOffset!: number;
  scrollDirection!: 'left' | 'right';

  testSlides!: Slide[];

  constructor() {}

  ngOnInit(): void {
    this.containerOffset = 0;
    this.scrollDirection = 'left';

    this.testSlides = this.slides.slice(0, 3);
    console.log('>>> test slides', this.testSlides.length);
  }

  handleSelectSlide(characterName: string): void {
    console.log('[HANDLE SELECT CHARACTER]', characterName);
  }

  handleScrollDirection(direction: 'left' | 'right'): void {
    this.scrollDirection = direction;
    this.performScrolling();
  }

  performScrolling(): void {
    let offsetDelta: number = this.scrollDirection === 'left' ? -100 : +100;

    this.slideContainer.nativeElement.animate(
      [
        // keyframes
        { transform: `translateX(${this.containerOffset}px)` },
        { transform: `translateX(${this.containerOffset + offsetDelta}px)` },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );

    setTimeout(() => (this.containerOffset += offsetDelta), 1000);
  }
}
