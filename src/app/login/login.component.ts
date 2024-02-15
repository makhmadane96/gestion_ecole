import { Component, OnInit } from '@angular/core';
import { Joueur } from '../Model/joueur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nom:string ="LO";
  prenom:string ="Mamadou";
  age :number = 20;
  joueurs:string[] = ["Ronaldom","Messi","Mane","Amadou"];
  birthdate = new Date(1984, 7, 30);

  val1!: Joueur;
  

  constructor() { }
//TypeScript

  ngOnInit(): void {

  }


  bonjour(){
    this.val1.age=2
    alert("Bonjour: "+this.prenom);
  }
}
