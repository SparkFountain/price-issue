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

  constructor() {}

  ngOnInit(): void {
    this.characters = [
      {
        name: 'Sophie Holländer',
        job: 'tourism-business-woman',
        age: 25,
        nationality: 'german',
        imagePath: 'sophie-hollaender.svg',
      },
    ];
  }

  handleSelectCharacter(characterName: string): void {
    console.log('[HANDLE SELECT CHARACTER]', characterName);
  }
}
