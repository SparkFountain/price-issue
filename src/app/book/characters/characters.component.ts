import { Component, OnInit } from '@angular/core';

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
  }

  handleSelectCharacter(characterName: string): void {
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
