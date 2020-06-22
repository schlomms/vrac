import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  games = [];
  types = [];
  valueName = '';
  typeOk = [];
  title = '';

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute) {
}

  ngOnInit() {
    this.games = this.gamesService.games;
    this.types = this.gamesService.types;
  }

  selectName($event) {
    this.typeOk.splice(0, this.typeOk.length);
    for(let game of this.games) {
      if(game.type === $event.target.value) {
        this.typeOk.push(game.name);
      }
    }
  }

  selectedNames = null;
}
