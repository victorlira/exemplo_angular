import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/entidades/usuario';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [DBService]
})
export class UsuariosComponent implements OnInit {

  novoUsuario: Usuario;

  usuarios: Usuario[];

  carregando: boolean;

  constructor (private database: DBService) {
    this.novoUsuario = new Usuario();

    this.carregarUsuarios();
  }

  ngOnInit() {
  }

  private carregarUsuarios() {
    this.carregando = true;

    this.database.listar<Usuario>('usuarios')
    .then(usuariosDB => {
      this.usuarios = usuariosDB;

      this.carregando = false;
    });
  }

  cadastrar() {
    this.database.inserir('usuarios', this.novoUsuario)
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        this.novoUsuario = new Usuario();
        this.carregarUsuarios();
      });
  }

  remover(uid: string) {
    this.database.remover('usuarios', uid)
      .then(() => {
        alert('usuário removido com sucesso');

        this.carregarUsuarios();
      });
  }

  editar(usuario) {
    usuario.editando = true;
  }

  cancelEdit(usuario) {
    usuario.editando = false;
  }

  confirmEdit(usuario) {
    this.database.atualizar('usuarios', usuario.uid, { nome: usuario.nome, email: usuario.email })
      .then(() => {
        alert('usuário atualizado com sucesso');

        this.carregarUsuarios();
      });
  }
}
