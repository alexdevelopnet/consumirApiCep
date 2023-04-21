import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  url: string = 'http://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getConsultarCep(cep: string) {
    return this.http.get(`${this.url}${cep}/json`)
  }
}
