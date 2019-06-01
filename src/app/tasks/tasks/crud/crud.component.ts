import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent {

  filter: string;
  names: Name[] = [		{name: 'Hans', surname: 'Emil'}, {name: 'Max', surname: 'Mustermann'}, {name: 'Roman', surname: 'Tisch'}];

  name = '';
  surname = '';

  i: number;

  constructor() { }

  create() {
    this.names.push({name: this.name, surname: this.surname});
  }

  update() {
    this.names[this.i] = {name: this.name, surname: this.surname};
  }

  delete() {
    this.names.splice(this.i, 1);
  }


}

interface Name {
  name: string;
  surname: string;
}

// Filter the names whose surname start with the entered prefix
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'prefixFilter'
})
export class PrefixFilterPipe implements PipeTransform {
  transform(names: Name[], searchText: string): any[] {
    if(!names) return [];
    if(!searchText) return names;
    searchText = searchText.toLowerCase();
    return names.filter( it => {
      return it.surname.toLowerCase().startsWith(searchText);
    });
  }
}
