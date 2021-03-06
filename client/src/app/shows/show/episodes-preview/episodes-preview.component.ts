import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { EpisodesPreviewService, IPreview } from './episodes-preview.service';

@Component({
  selector: 'wl-episodes-preview',
  templateUrl: './episodes-preview.component.html',
  styleUrls: ['./episodes-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesPreviewComponent implements OnChanges {
  @Input() disabled: boolean;
  @Input() premiereDate: Date;
  @Input() frequency: string;
  @Input() season: number;
  @Input() episodes: number;

  showPreview = false;
  items: IPreview[];
  amCalendarFormat = {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'ddd, DD.MM.YYYY'
    };

  constructor(
    private episodePreviewService: EpisodesPreviewService
  ) { }

  ngOnChanges(changes: any): void {
    this.refreshItems();

    if (changes.disabled && changes.disabled.currentValue && !changes.disabled.previousValue) {
      this.showPreview = false;
    }
  }

  togglePreview(): void {
    this.showPreview = !this.showPreview;
    this.refreshItems();
  }

  refreshItems(): void {
    if (this.showPreview) {
      this.items = this.episodePreviewService.generatePreviewItems(this.premiereDate, this.frequency, this.season, this.episodes);
    }
  }

  getItemId(_index: number, item: IPreview): string {
    return `${item.season}_${item.episode}_${item.premiereDate.toISOString()}`;
  }

}
