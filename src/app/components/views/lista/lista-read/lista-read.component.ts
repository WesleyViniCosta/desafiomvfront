import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../lista.model';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista-read',
  templateUrl: './lista-read.component.html',
  styleUrls: ['./lista-read.component.css']
})
export class ListaReadComponent implements OnInit {

  lista: Lista[] = []

  displayedColumns: string[] = ['nome', 'cpf', 'comida', 'acoes'];

  constructor(private service: ListaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
 
  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.lista = resposta;
    })
  }
  navegarParaListaCreate(){
    this.router.navigate(["lista/create"])
  }
}
