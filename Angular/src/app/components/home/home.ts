import { Component, DoCheck, OnInit } from '@angular/core';
import { usuario } from '../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ɵEmptyOutletComponent } from "@angular/router";
import { NgSwitch } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-home',
  imports: [ɵEmptyOutletComponent, NgSwitch],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers [UsuarioService]
})
export class Home implements OnInit, DoCheck{
  public title = 'componente-home'
  public color: string;
  //public ususario: Usuario;
  public usuario: Array<Usuario>;
  constructor(){ 
    private _usuarioService: UsuarioService
  }{
    this.usuario= this._usuarioService.getUsuario();
    this.color = 'yellow';
  }

  ngOnInit(): void {
    console.log('OnInit ejecutando')
  }
  ngDocheck(){
    console.log(Docheck); 
  }

  onclick(){
  console.log('Ha shecho click');
  }
  onblur(){
    console.log('evento blur activado');
  }
  onkey(){
    console.log('actividado');
  }
}

