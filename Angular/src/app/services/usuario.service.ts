import { Injectable } from '@Angular/core';

import { usuario } from '../models/usuario';
@Injectable()
export class UsuarioService{
     public usuario: Array<usuario>;
     constructor(){
        this.suario = [
            new Usuario('Adrian', 'Lisciotti', 'Argentina', 40, 'masculino', true),
            new usuario('Juan', 'Santero', 'Mexico', 30, 'masculino', false),
            new Usuario('karina', 'Jeliner', 'Argentina', 40, 'femenino', false),
            new usuario('Luis Nazario', 'Ronaldo', 'Brazil', 45, 'masculino', true),
            new usuario('Cristiano', 'Ronaldo', 'Portugal', 40, 'masculino', true)
        ]
     }

     getUsuario(): ArrayUsuario{
        return this.usuario;
     }
}