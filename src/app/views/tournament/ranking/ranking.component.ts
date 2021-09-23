import { Component, OnInit } from '@angular/core';

import * as ranking from '../../../data/rankings_general.json';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  rankings: any[][] = (ranking as any).default;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.rankings);
  }


  selectPlayer(objectId: number) {
    // find the player with the objectId
    let playerRow = -1;
    let playerColumn = -1;

    for (let row = 0; row < this.rankings.length; row++) {
      for (let column = 0; column < this.rankings[row].length; column++) {
        this.rankings[row][column].highlighted = false;
        if (this.rankings[row][column].position === objectId) {
          this.rankings[row][column].selected = true;
          playerRow = row;
          playerColumn = column;
        } else {
          this.rankings[row][column].selected = false;
        }
      }
    }
    // highlight all possible players
    // the number of the row is the number of the possible players - highlight them
    if (playerColumn >= 0 && playerRow >= 0) {
      let row = playerRow;
      let column = playerColumn;
      let offset = (playerRow < 2 || (playerColumn === 0 && playerRow === 2)) ? 1 : 0;
      for (let counter = 1; counter <= playerRow + offset; counter++) {
        if (column == 0) {
          column = this.rankings[row - 1].length - 1;
          row -= 1;
        } else {
          column -= 1;
        }
        this.rankings[row][column].highlighted = true;
      }
    }
  }
}
