import { Injectable } from '@angular/core';
import { DBService } from './db.service';
import { Contato } from 'src/entidades/contato';
import { Usuario } from 'src/entidades/usuario';

const PATH = 'usuarios';

@Injectable()
export class UsuariosService {

    constructor(private database: DBService) {
    }

    inserir(usuario: Usuario): Promise<string> {
        return this.database.inserir(PATH, usuario);
    }

    atualizar(usuario: Usuario): Promise<void> {
        return this.database.atualizar(PATH, usuario.uid, { nome: usuario.nome, email: usuario.email });
    }

    listar(): Promise<Usuario[]> {
        return this.database.listar<Usuario>(PATH);
    }

    remover(uid: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.database.buscar<Contato>('contatos', 'uidUsuario', uid)
                .then(contatos => {
                    if (contatos.length > 0) {
                        reject('Não é possível remover o usuário, pois ele possui contatos associados.');
                    } else {
                        this.database.remover(PATH, uid)
                            .then(() => resolve());
                    }
                });
        });
    }
}