import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nom:string ="LO";
  prenom:string ="Mamadou";
  age :number = 20;
  joueurs:string[] = ["Ronaldo","Messi","Mane"];

  constructor() { }
//TypeScript

  ngOnInit(): void {
  }


  bonjour(){
    alert("Bonjour: "+this.prenom);
  }
}
