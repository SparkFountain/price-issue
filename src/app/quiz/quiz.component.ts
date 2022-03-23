import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  answers!: Array<boolean>;
  userChoices!: Array<boolean | undefined>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.answers = [
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    this.userChoices = Array(30).fill(undefined);
  }
}
