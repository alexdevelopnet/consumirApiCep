import { Component, OnInit } from '@angular/core';
import { EnderecoService } from './../endereco.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  constructor(
    private router: Router,
    private service: EnderecoService) { }

  ngOnInit(): void {
  }
  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
    } else {
      alert("Formulário inválido");
    }
    console.log(form.controls);
  }

  consultarCep(ev: any, f: NgForm) {
    const cep = ev.target.value;
    if (cep !== "") {
      this.service.getConsultarCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, f);
      });
    }
  }

  populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,

    })
  }

}
