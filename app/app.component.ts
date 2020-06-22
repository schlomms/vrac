import {Component} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pseudo: string = null;
  mystery = 0;
  playing = false;
  count = 0;
  valuePseudo = '';
  exist = false;
  min = 1;
  max = 25;
  valueEssai = 0;
  message = '';
  tableCount = [];
  tableLeader = [];
  objectGame: any = null;
  numberGame: number = 1;

  createPlayer(data) {
    this.objectGame = {
      pseudo: data.pseudo,
      mystery: data.mystery
    };
    this.pseudo = data.pseudo;
    this.mystery = data.mystery;
    this.playing = true;
    this.count = 0;
    this.tableCount.splice(0, this.tableCount.length);
    this.exist = false;
  }

 findNumber() {
   this.message = '';
   this.count++;
   this.tableCount.push(this.count);

   if(this.valueEssai === this.mystery) {
     this.message = 'c\'est gagné';

     for (let player of this.tableLeader) {
       if(player.pseudo === this.pseudo) {
         if(player.score > this.count) {
          player.score = this.count;
         }
         player.numberGame++;
         this.exist = true;
       }
     }

     if(this.exist === false) {
      this.tableLeader.push({
        pseudo: this.pseudo,
        score: this.count,
        numberGame: this.numberGame
      });
      this.tableLeader = _.sortBy(this.tableLeader, [function(i) { return i.score; }]);
     }
     
   } else if (this.valueEssai < this.mystery) {
        if (this.valueEssai < this.mystery - 2) {
          this.message = 'c\'est plus';
        } else {
          this.message = 'c\'est plus mais presque ca';
        }
   } else if (this.valueEssai > this.mystery) {
    if (this.valueEssai > this.mystery + 2) {
      this.message = 'c\'est moins';
    } else {
      this.message = 'c\'est moins mais presque ca';
    }
   }
 }

  newGame() {
  this.playing = false;
 }

 setPseudo() {
    this.mystery = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    console.log(this.mystery);
    let game = {
      pseudo: this.pseudo,
      mystery: this.mystery
    };
    this.createPlayer(game);
}
}
