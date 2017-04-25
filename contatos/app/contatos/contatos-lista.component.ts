import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})

export class ContatosListaComponent {
    contatos: Contato[] = CONTATOS;
}