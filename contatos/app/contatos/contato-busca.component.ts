import { ContatoService } from './contato.service';
import { Contato } from './contato.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Router } from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }
    `]
})
export class ContatoBuscaComponent implements OnInit, OnChanges {

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();


    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.contatos = this.termosDaBusca
            .debounceTime(500) //aguarde por 300 milisegundos para chamar outro evento
            .distinctUntilChanged() //ignore se o proximo termo de busca for igual ao anterior
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
            console.log(err);
            return Observable.of<Contato[]>([]);
        });
     }

    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
        
    }

    search(termo: string): void {
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
        
    }

    verDetalhe(contato: Contato): void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }
}