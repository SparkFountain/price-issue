import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
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

  constructor(private transloco: TranslocoService) {}

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
        name: 'Carina Seidel',
        job: 'tourism-business-woman',
        age: 25,
        nationality: 'german',
        imagePath: 'carina-seidel.svg',
      },
      {
        name: 'Max Rohde',
        job: 'ceo-rohde-travel',
        age: 64,
        nationality: 'german',
        imagePath: 'max-rohde.svg',
      },
      {
        name: 'Carolina Perth',
        job: 'ceo-planet-earth-network',
        age: 41,
        nationality: 'united-states',
        imagePath: 'carolina-perth.svg',
      },
      {
        name: 'Michael Perth',
        job: 'travel-journalist',
        age: 60,
        nationality: 'united-states',
        imagePath: 'michael-perth.svg',
      },
      {
        name: 'Laurent Montpellier',
        job: 'software-developer',
        age: 30,
        nationality: 'france',
        imagePath: 'laurent-montpellier.svg',
      },
      {
        name: 'Margarete König',
        job: 'writer',
        age: 30,
        nationality: 'german',
        imagePath: 'margarete-koenig.svg',
      },
      {
        name: 'Jim Black',
        job: 'eco-activist',
        age: 17,
        nationality: 'new-zealand',
        imagePath: 'jim-black.svg',
      },
      {
        name: 'Kaori "Chelsea" Mihaere',
        job: 'eco-activist',
        age: 16,
        nationality: 'new-zealand',
        imagePath: 'kaori-mihaere.svg',
      },
      {
        name: 'Gordon King',
        job: 'chief-inspector',
        age: 60,
        nationality: 'new-zealand',
        imagePath: 'gordon-king.svg',
      },
      {
        name: 'Anneliese Schultze',
        job: 'pastors-wife',
        age: 52,
        nationality: 'german',
        imagePath: 'anneliese-schultze.svg',
      },
      {
        name: 'Iwan Komarow',
        job: 'hacker',
        age: 47,
        nationality: 'russian',
        imagePath: 'iwan-komarow.svg',
      },
      {
        name: 'Jens Kiesewetter',
        job: 'radical-left-coordinator',
        age: 39,
        nationality: 'german',
        imagePath: 'jens-kiesewetter.svg',
      },
    ];

    this.slides = this.characters.map((character: Character) => ({
      title: character.name,
      subtitle: this.transloco.translate(
        `the-book.characters.jobs.${character.job}`
      ),
      imagePath: `/assets/images/characters/${character.imagePath}`,
    }));
  }
}
