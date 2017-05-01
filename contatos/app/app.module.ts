import { DialogService } from './dialog.service';
import { ContatosModule } from './contatos/contatos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule} from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HttpModule} from '@angular/http';
import { BrowserModule} from '@angular/platform-browser';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    providers: [DialogService],
    bootstrap: [AppComponent]
})
export class AppModule{

}

