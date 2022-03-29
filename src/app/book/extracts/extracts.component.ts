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
    this.slides = [
      {
        title: 'Ajdovščina, Slowenien',
        subtitle: '16. Juni 2016',
        content: 'Du musst mir helfen. Sag für heute alle Termine ab. Finde alles über diesen Levi Vass heraus. '
      },
      {
        title: 'Venedig, Italien',
        subtitle: '14. Juli 2017',
      },
      {
        title: 'Vancouver, Kanada',
        subtitle: '14. Juli 2017',
        content: 'Touristenmesse',
      },
      {
        title: 'Brocken, Harz, Deutschland',
        subtitle: '1. April 2018',
      },
    ];
  }
}
