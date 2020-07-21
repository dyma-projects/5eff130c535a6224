import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';




@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
//output va émettre au composant exercice1 la valeur reçu dans la méthode valleurClick
  @Output() public valeurClick: EventEmitter<string> = new EventEmitter<string>();

//input qui va recevoir la valeur du compteur cette valeur et émis par le parent
  @Input() compteur: number;

  
  constructor() { }

  ngOnInit() {
  }
  /*Méthode qui va recevoir en paramétre la valeur du bouton qui est cliqué
  et la transmettre à l'output valeurClick et declenché l'eventEmitter
  pour transmettre la donnée au parent*/
  valleurClick(valeur: string): void {
    this.valeurClick.emit(valeur);
  }
}
