import { Component } from '@angular/core';
import { Mapview } from '../mapview/mapview';
import { Mapdetail } from '../mapdetail/mapdetail';

@Component({
  selector: 'app-persistent-panel',
  imports: [Mapview, Mapdetail],
  templateUrl: './persistent-panel.html',
  styleUrl: './persistent-panel.css'
})
export class PersistentPanel {

}
