import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface LiteratureNode {
  name: string;
  children?: LiteratureNode[];
}

const TREE_DATA: LiteratureNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

export interface Book {
  title: string;
  author: string;
  publisher: string;
  isbn: string;
}

const BOOK_DATA: Book[] = [
  {
    title: 'Tourismus in der Kritik',
    author: 'Torsten Kirstges',
    publisher: 'utb GmbH',
    isbn: '978-3825253387',
  },
  {
    title: 'Marketing in Tourismus und Freizeit',
    author: 'Rainer Hartmann',
    publisher: 'utb GmbH',
    isbn: '978-3825249939',
  },
  {
    title: 'Das Handbuch für nachhaltiges Reisen',
    author: 'Silke Elzner (Übersetzerin)',
    publisher: 'Bruckmann Verlag GmbH',
    isbn: '978-3734320750',
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.scss'],
})
export class LiteratureComponent implements OnInit {
  private _transformer = (node: LiteratureNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  displayedColumns: string[] = ['title', 'author', 'publisher', 'isbn'];
  tableData = BOOK_DATA;

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
