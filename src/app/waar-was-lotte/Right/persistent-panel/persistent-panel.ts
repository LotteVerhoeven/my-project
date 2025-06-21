import { Component } from '@angular/core';
import { Mapview } from '../mapview/mapview';
import { Mapdetail } from '../mapdetail/mapdetail';
import { MarkerData } from '../../../models/marker-data.interface';

@Component({
  selector: 'app-persistent-panel',
  imports: [Mapview, Mapdetail],
  templateUrl: './persistent-panel.html',
  styleUrl: './persistent-panel.css'
})
export class PersistentPanel {
  selectedMarkerData: MarkerData | null = null;

  onMarkerClicked(markerData: MarkerData) {
    this.selectedMarkerData = markerData;
  }
}
