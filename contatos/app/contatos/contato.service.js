"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
let ContatoService = class ContatoService {
    constructor(http) {
        this.http = http;
        this.contatoUrl = 'app/contatos';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    getContatos() {
        return this.http.get(this.contatoUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
        // return Promise.resolve(CONTATOS);
    }
    getContato(id) {
        return this.getContatos()
            .then((contatos) => contatos.find(contato => contato.id === id));
    }
    handleError(err) {
        console.log('Erro: ', err);
        return Promise.reject(err.message || err);
    }
    create(contato) {
        return this.http
            .post(this.contatoUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((response) => response.json().data)
            .catch(this.handleError);
    }
    update(contato) {
        const url = `${this.contatoUrl}/${contato.id}`; //app/contatos/:id
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato)
            .catch(this.handleError);
    }
    getContatoSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
            .then(() => {
            console.log('primeiro then');
            return 'Curso Angular 2 Júnior Mendonça';
        })
            .then((param) => {
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
};
ContatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map