import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DBService } from './servicos/db.service';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ContatosComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'contatos', component: ContatosComponent }
    ])
  ],
  providers: [AngularFireDatabase, DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
