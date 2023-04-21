import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnderecoComponent } from './components/cadastro/endereco/endereco.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { MensagemComponent } from './components/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent,
    ValidandoCepDirective,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
