import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Contato } from 'src/entidades/contato';
import { Usuario } from 'src/entidades/usuario';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [DBService]
})
export class ContatosComponent implements OnInit {

  novoContato: Contato;

  contatos: Contato[];

  usuarios: Usuario[];

  carregando = true;

  constructor (private database: DBService) {
    this.novoContato = new Contato();
    this.carregarUsuarios();
  }

  ngOnInit() {
  }

  private carregarUsuarios() {
    this.database.listar<Usuario>('usuarios')
    .then(usuariosDB => {
      this.usuarios = usuariosDB;

      this.carregarContatos();
    });
  }

  private carregarContatos() {
    this.carregando = true;

    this.database.listar<Contato>('contatos')
    .then(contatosDB => {
      this.contatos = contatosDB;

      this.contatos.forEach(contato => contato['nomeUsuario'] = this.usuarios.filter(u => u.uid === contato.uidUsuario)[0].nome);

      this.carregando = false;
    });
  }

  cadastrar() {
    this.database.inserir('contatos', this.novoContato)
      .then(() => {
        alert('Contato cadastrado com sucesso');
        this.novoContato = new Contato();
        this.carregarContatos();
      });
  }

  remover(uid: string) {
    this.database.remover('contatos', uid)
      .then(() => {
        alert('Contato removido com sucesso');

        this.carregarContatos();
      });
  }

  editar(contato) {
    contato.editando = true;
  }

  cancelEdit(contato) {
    contato.editando = false;
  }

  confirmEdit(contato: Contato) {
    this.database.atualizar('contatos', contato.uid, { tipo: contato.tipo, descricao: contato.descricao, uidUsuario: contato.uidUsuario })
      .then(() => {
        alert('Contato atualizado com sucesso');

        this.carregarContatos();
      });
  }
}
