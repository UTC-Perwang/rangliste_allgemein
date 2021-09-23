import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
})
export class CardStatsComponent implements OnInit {

  @Input()
  player: any;

  @Input()
  get statSubtitle(): string {
    return this._statSubtitle;
  }

  set statSubtitle(statSubtitle: string) {
    this._statSubtitle = statSubtitle === undefined ? 'Traffic' : statSubtitle;
  }

  private _statSubtitle = 'Traffic';

  @Input()
  get statIconName(): string {
    return this._statIconName;
  }

  set statIconName(statIconName: string) {
    this._statIconName = statIconName === undefined ? 'far fa-chart-bar' : statIconName;
  }

  private _statIconName = 'far fa-chart-bar';

  @Input()
  get statText(): string {
    return this._statText;
  }

  set statText(statText: string) {
    this._statText = statText === undefined ? '' : statText;
  }

  private _statText = '';

  // can be any of the background color utilities
  // from tailwindcss
  @Input()
  get statIconColor(): string {
    return this._statIconColor;
  }

  set statIconColor(statIconColor: string) {
    this._statIconColor = statIconColor ? statIconColor : 'bg-blueGray-200';
  }

  @Output()
  playerSelected: EventEmitter<any> = new EventEmitter();

  private _statIconColor = 'bg-blueGray-200';

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPlayer(objectId: number) {
    this.playerSelected.emit(objectId);
  }
}
