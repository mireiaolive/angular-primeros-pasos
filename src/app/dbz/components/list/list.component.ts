import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //Decorador para recibir properties de padre(main) a hijo(list)
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
