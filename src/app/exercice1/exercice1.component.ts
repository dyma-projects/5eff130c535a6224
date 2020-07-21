import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public compteur = 0;

  constructor() { }

  ngOnInit() {}
/*Méthode qui va recevoir le contenu de l'evenement émis par le composant enfant
 et traité la donnée reçu et renvoyé le resultat à la variable compteur*/
  valleurClick(event: string) {
    if (event === '+') {
      this.compteur ++;
    } else if (event === '-') {
      this.compteur --;
    } else {
      this.compteur = this.compteur;
    }
  }
}
