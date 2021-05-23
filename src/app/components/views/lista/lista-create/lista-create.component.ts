import { Component, OnInit } from '@angular/core';
import { Lista } from '../lista.model';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista-create',
  templateUrl: './lista-create.component.html',
  styleUrls: ['./lista-create.component.css']
})
export class ListaCreateComponent implements OnInit {

  lista: Lista = {
    nome: '',
    cpf: '',
    comida: ''
  }
  constructor(private service: ListaService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.lista).subscribe((resposta) => {
console.log(resposta)
    })
  }

}
