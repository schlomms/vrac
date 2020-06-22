import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-lancement-jeu',
  templateUrl: './lancement-jeu.component.html',
  styleUrls: ['./lancement-jeu.component.scss']
})
export class LancementJeuComponent implements OnInit {

  constructor() { }

@Output()
transfert = new EventEmitter<any>();

pseudo: string = null;
valuePseudo = '';
pseudoVide = false;

mystery = 0;
min = 1;
max = 25;

ngOnInit() {
}

  setPseudo() {
    this.pseudo = this.valuePseudo;
    this.pseudoVide = true;
    this.mystery = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    console.log(this.mystery);
    if (this.pseudo.length > 2) {
      let game = {
      pseudo: this.pseudo,
      mystery: this.mystery
    }
    this.transfert.emit(game);
    }
    
  }
}
