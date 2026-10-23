import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  nomeCompleto: string = "Escreva pequeno crioulo";
  nomeCompleto1: string = "Escreva pequeno crioulo";

 /* objetoModelo)= {
  nome: 'Guilherme',
    idade: 16,
      altura: 1.78,
        graduado: false
}; */

listaProdutos: any[] = [
  
  {nome: 'Curso de Angular', precoProduto: 39.90, validade: '2026-10-02', id: 1},
  {nome: 'Curso de Ionic', precoProduto: 50, validade: '2026-10-02', id: 2},
  {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 80,promocao: true, validade: '2026-10-02'},
];

constructor() {
  for (let item of this.listaStrings) {
    console.log(item);
  }

  for (const item of this.listaNumeros) {
    console.log(item);
  }

//  console.log(this.objetoModelo);
}
}
