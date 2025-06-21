import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerData } from '../../../models/marker-data.interface';

@Component({
  selector: 'app-mapdetail',
  imports: [CommonModule],
  templateUrl: './mapdetail.html',
  styleUrl: './mapdetail.css'
})
export class Mapdetail {
  @Input() data: MarkerData | null = null;
}
