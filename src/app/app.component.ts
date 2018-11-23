import { Component } from '@angular/core';
import { Usuario } from 'src/entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  novoUsuario: Usuario;

  usuarios: Usuario[];

  constructor () {
    this.novoUsuario = new Usuario();

    this.usuarios = [
      { nome: 'Victor Lira', email: 'vl@cin.ufpe.br'},
      { nome: 'Fulano de tal', email: 'fulano@gmail.com'},
      { nome: 'Beltrano', email: 'beltrano@gmail.com'},
    ];
  }

  cadastrar() {
    alert('Usuário cadastrado com sucesso');
    this.usuarios.push(this.novoUsuario);
    this.novoUsuario = new Usuario();
  }

  remover(usuario) {
    this.usuarios = this.usuarios.filter(u => u.email !== usuario.email);
  }
}
