import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/core/dummy-components/slideshow/slide.interface';

interface Character {
  name: string;
  job: string;
  age: number;
  nationality: string;
  imagePath: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters!: Character[];
  slides!: Slide[];
  containerOffset!: number;
  isScrolling!: 'left' | 'right' | false;

  constructor() {}

  ngOnInit(): void {
    this.containerOffset = 0;
    this.isScrolling = false;

    this.characters = [
      {
        name: 'Sophie Holländer',
        job: 'tourism-business-woman',
        age: 25,
        nationality: 'german',
        imagePath: 'sophie-hollaender.svg',
      },
      {
        name: 'Carolina Perth',
        job: '',
        age: 41,
        nationality: 'united-states',
        imagePath: 'carolina-perth.svg',
      },
      {
        name: 'Michael Perth',
        job: '',
        age: 60,
        nationality: 'united-states',
        imagePath: 'michael-perth.svg',
      },
      {
        name: 'Laurent Montpellier',
        job: '',
        age: 30,
        nationality: 'france',
        imagePath: 'laurent-montpellier.svg',
      },
      {
        name: 'Margarete König',
        job: '',
        age: 30,
        nationality: 'german',
        imagePath: 'margarete-koenig.svg',
      },
      {
        name: 'Jim Black',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: '',
        age: 0,
        nationality: '',
        imagePath: 'jim-black.svg',
      },
    ];

    this.slides = this.characters.map((character: Character) => ({
      title: character.name,
      subtitle: character.job,
      imagePath: `/assets/images/characters/${character.imagePath}`,
    }));
  }
}
