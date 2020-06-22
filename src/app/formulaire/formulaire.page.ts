import { Component, OnInit } from '@angular/core';
import { ngForm } from '@angular/forms';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  constructor(private gamesService: GamesService) { }

  games = [];
  types = [];

  ngOnInit() {
    this.games = this.gamesService.games;
  }

  onSubmit(f: ngForm) {
    const addgame = this.gamesService.addGame(f.value);
    this.games = this.gamesService.getGames();
    this.types = this.gamesService.getTypes();
  }
}
