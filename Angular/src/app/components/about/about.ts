import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario";

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit{
   public title = 'componente-about';
   public usuario:any;
   constructor(){}
   ngOnInit(): void {
    this.usuario= new Usuario('Adrian', 'Lisciotti', 'Argentina', 35, 'masculino', true);
     
   }
}
