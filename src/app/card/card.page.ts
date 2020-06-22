import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  sport = '';
  imgVal = '';
  title = '';
  selectedGame = null;

  constructor(private route: ActivatedRoute,
              private gamesService: GamesService) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('sport');
    this.selectedGame = this.gamesService.getGameByName(this.title);
    }
  }


