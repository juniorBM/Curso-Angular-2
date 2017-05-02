import { Http, Headers, Response } from '@angular/http';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";



@Injectable()
export class ContatoService {

    private contatoUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatoUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
        // return Promise.resolve(CONTATOS);
    }

    getContato(id: number) : Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    private handleError(err: any): Promise<Contato> {
        console.log('Erro: ', err);
        return Promise.reject(err.message || err);
    }

    create(contato: Contato): Promise<Contato> {
        return this.http
            .post(this.contatoUrl, JSON.stringify(contato), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json().data as Contato)
            .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url = `${this.contatoUrl}/${contato.id}`; //app/contatos/:id
        return this.http
            .put(url, JSON.stringify(contato), {headers: this.headers})
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato>{
        const url = `${this.contatoUrl}/${contato.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }


    getContatoSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
        .then(() => {
            console.log('primeiro then');
            return 'Curso Angular 2 Júnior Mendonça';
        })
        .then((param: string) => {
            console.log('segundo then');
            console.log(param);

            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuando depois de 4 segundos');
                    resolve2();
                }, 4000);
            });
        })
        .then(() => {
           console.log('terceiro then');
           return this.getContatos();
        });
    }

    search(term: string): Observable<Contato[]>{
        return this.http
        .get(`${this.contatoUrl}/?nome=${term}`)
        .map((res: Response) => res.json().data as Contato[]);
    }
}