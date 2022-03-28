import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Slide } from 'src/app/core/dummy-components/slideshow/slide.interface';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss'],
})
export class ScenesComponent implements OnInit {
  nations!: { [key: string]: string[] };
  slides!: Slide[];

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.nations = {
      canada: ['vancouver', 'vancouver-island'],
      france: ['la-reunion'],
      germany: ['berlin', 'dresden', 'usedom'],
      'new-zealand': ['auckland', 'christchurch', 'ranfurly', 'russell'],
      portugal: ['madeira'],
      spain: ['gran-canaria'],
      mauritius: ['mauritius'],
    };

    this.slides = [
      'canada',
      'france',
      'germany',
      'new-zealand',
      'portugal',
      'spain',
      'mauritius',
    ].map((nation: string) => ({
      title: this.translocoService.translate(
        `the-book.scenes.nations.${nation}.title`
      ),
      imagePath: `assets/images/scenes/${nation}/${nation}_rectangular_icon_with_frame_256.png`,
    }));
  }
}
