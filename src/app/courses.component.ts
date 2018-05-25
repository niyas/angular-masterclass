import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    {{text | summary: 100}}
    `
})
export class CoursesComponent {
  text = `Lorem ipsum dolor sit amet, ut mel volutpat dignissim deseruisse, ad pri erat omnis soleat. Dico posidonium an vel, id persecuti abhorreant usu. Id falli scripta perpetua eos. Sed ei soleat prodesset constituam, pri an solet munere consulatu. Eu per ferri latine impedit.`
}