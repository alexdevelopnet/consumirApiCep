import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoComponent } from './components/cadastro/endereco/endereco.component';
import { AppComponent } from './app.component';

const routes: Routes = [
   
    {path: ''  , component:EnderecoComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
