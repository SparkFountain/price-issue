import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/core/dummy-components/slideshow/slide.interface';

@Component({
  selector: 'app-extracts',
  templateUrl: './extracts.component.html',
  styleUrls: ['./extracts.component.scss'],
})
export class ExtractsComponent implements OnInit {
  slides!: Slide[];

  constructor() {}

  ngOnInit(): void {
    this.slides = [{
      title: 'Prolog',
      content: '<b>Lorem Ipsum</b> <i>dolor</i> sit amet.'
    }]
  }
}
