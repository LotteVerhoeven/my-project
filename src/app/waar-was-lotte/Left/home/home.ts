import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TimelineDataService, TimelineYear } from '../../../services/timeline-data.service';
import { TimelineInteractionService } from '../../../services/timeline-interaction.service';
import { TimelineItem } from '../../../models/timeline-item.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  timelineYears$: Observable<TimelineYear[]>;

  constructor(
    private timelineDataService: TimelineDataService,
    private timelineInteractionService: TimelineInteractionService
  ) {
    this.timelineYears$ = this.timelineDataService.getTimelineItemsByYear();
  }

  ngOnInit(): void {
    // Component initialization if needed
  }

  onTimelineItemClick(item: TimelineItem): void {
    this.timelineInteractionService.selectMarker(item.marker_id);
  }
}
