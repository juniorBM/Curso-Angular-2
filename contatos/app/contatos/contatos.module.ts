import { ContatosListaComponent } from './contatos-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ]
})

export class ContatosModule {}