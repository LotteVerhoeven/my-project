import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TimelineDataService } from '../../../services/timeline-data.service';
import { TimelineInteractionService } from '../../../services/timeline-interaction.service';
import { TimelineItem } from '../../../models/timeline-item.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  timelineItems$: Observable<TimelineItem[]>;

  constructor(
    private timelineDataService: TimelineDataService,
    private timelineInteractionService: TimelineInteractionService
  ) {
    this.timelineItems$ = this.timelineDataService.getTimelineItems();
  }

  ngOnInit(): void {
    // Component initialization if needed
  }

  onTimelineItemClick(item: TimelineItem): void {
    this.timelineInteractionService.selectMarker(item.marker_id);
  }
}
