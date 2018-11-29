import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/entidades/usuario';
import { UsuariosService } from '../servicos/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {

  novoUsuario: Usuario;

  usuarios: Usuario[];

  carregando: boolean;

  constructor (private usuarioService: UsuariosService) {
    this.novoUsuario = new Usuario();

    this.carregarUsuarios();
  }

  ngOnInit() {
  }

  private carregarUsuarios() {
    this.carregando = true;

    this.usuarioService.listar()
      .then(usuariosDB => {
        this.usuarios = usuariosDB;

        this.carregando = false;
    });
  }

  cadastrar() {
    this.usuarioService.inserir(this.novoUsuario)
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        this.novoUsuario = new Usuario();
        this.carregarUsuarios();
    });
  }

  remover(uid: string) {
    this.usuarioService.remover(uid)
      .then(() => {
        alert('usuário removido com sucesso');
        this.carregarUsuarios();
      }).catch(error => alert(error));
  }

  editar(usuario) {
    usuario.editando = true;
  }

  cancelEdit(usuario) {
    usuario.editando = false;
  }

  confirmEdit(usuario) {
    this.usuarioService.atualizar(usuario)
      .then(() => {
        alert('usuário atualizado com sucesso');

        this.carregarUsuarios();
      });
  }
}
