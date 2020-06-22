import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

names = [{
    name: "Jean",
    type: 'Casse-couilles'
  },
  {
    name: "salomon",
    type: 'batard'
  },
  {
    name: "Brian",
    type: 'imblérable'
  },
  {
    name: "cris",
    type: 'mignon'
  },
  {
    name: "Valerie",
    type: 'Douce'
  },
  {
    name: "esteban",
    type: 'mignon'
  },
  {
    name: "claude",
    type: 'Douce'
  },
  {
    name: "thierry",
    type: 'mignon'
  }
];
games = [
  {
    name: 'CS:GO',
    type: 'FPS',
    url: 'https://steamcdn-a.akamaihd.net/steam/apps/730/ss_baa02e979cd3852e3c4182afcd603ab64e3502f9.1920x1080.jpg?t=1580765900'
  },
  {
    name: 'Fortnite',
    type: 'TPS',
    url: 'https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fchapter-2-season-2-update%2F11BR_Evergreens_Blue_NewsHeader-1920x1080-77ade2f5f2bc0312b4978dcd7639adfe00211fe6.jpg'
  },
  {
    name: 'Minecraft',
    type: 'casual',
    url: 'https://www.google.com/search?q=fortnite&tbm=isch&ved=2ahUKEwitrL-uz5foAhUH_xoKHYx3DlsQ2-cCegQIABAA&oq=fort&gs_l=img.1.0.35i39j0l9.50978.51522..52871...0.0..1.229.402.3j0j1......0....1..gws-wiz-img.......0i67.-_oIpXBf9RU&ei=IZNrXu2XNof-a4zvudgF&bih=544&biw=1351&tbs=sur%3Afmc&hl=fr#imgrc=H-V16-e9_MFwcM'
  },
  {
    name: 'FF14',
    type: 'RPG',
    url: 'https://www.gamosaurus.com/wp-content/uploads/AAA/Square-Enix/Final-Fantasy-XIV-14/vignette-final-fantasy-xiv-tier-list-meilleurs-jobs-classes-ff-14.jpg'
  },
  {
    name: 'DOTA2',
    type: 'MOBA',
    url: 'https://www.google.com/search?q=DOTA2&tbm=isch&ved=2ahUKEwjlvJKfz5foAhWVxuAKHUUUCb0Q2-cCegQIABAA&oq=DOTA2&gs_l=img.3...0.0..30901...0.0..0.0.0.......0......gws-wiz-img.5VaMwRM1SgA&ei=AZNrXqW4KpWNgwfFqKToCw&bih=544&biw=1351&tbs=sur%3Afmc&hl=fr#imgrc=YloRD24osNOsrM'
  }
];

types = ['FPS', 'TPS', 'casual', 'RPG', 'MOBA'];



constructor() { }
// gameservice
getGameByName(name: string) {
  let selectedGame = null;
  for (const game of this.games) {
    if (game.name === name) {
      selectedGame = game;
    }
  }
  return selectedGame;
}

addGame(object) {
  this.games.push(object);
  this.types.push(object.type);
}

getGames() {
  return this.games;
}

getTypes() {
  return this.types;
}

}
