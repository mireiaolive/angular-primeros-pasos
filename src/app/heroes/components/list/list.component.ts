import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Huk',
    'Shibo',
    'Madona',
    'Berin',
  ];

  public deletedHero?: string;

  removeLasHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
