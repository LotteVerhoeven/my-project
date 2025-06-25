import { Component, OnInit, OnDestroy, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarkerDataService } from '../../../services/marker-data.service';
import { TimelineInteractionService } from '../../../services/timeline-interaction.service';
import { MarkerData } from '../../../models/marker-data.interface';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapview',
  imports: [],
  templateUrl: './mapview.html',
  styleUrl: './mapview.css'
})
export class Mapview implements OnInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  @Output() markerClicked = new EventEmitter<MarkerData>();

  // Map configuration
  private readonly accessToken = 'pk.eyJ1IjoicGlwbGFuZ2siLCJhIjoiY21jMjFycjN6MDJ6dDJpcXd4bzE2NG02bSJ9.SYsyEBhEJnywMa1f0QZtQA';
  private readonly mapConfig = {
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [5, 52] as [number, number],
    zoom: 2,
    attributionControl: true,
    logoPosition: 'bottom-left' as const
  };

  // Map instance and data
  private map: any;
  private markers: MarkerData[] = [];
  private markerObjects = new Map<string, any>();
  
  // State management
  private selectedMarkerData: MarkerData | null = null;
  private currentOpenPopup: any = null;
  private fullscreenChangeListener!: () => void;
  private timelineSubscription: Subscription = new Subscription();

  constructor(
    private markerDataService: MarkerDataService,
    private timelineInteractionService: TimelineInteractionService
  ) {}

  // ===== LIFECYCLE METHODS =====
  
  ngOnInit(): void {
    this.initializeMap();
    this.subscribeToTimelineInteractions();
  }

  ngOnDestroy(): void {
    this.cleanup();
    this.timelineSubscription.unsubscribe();
  }

  // ===== MAP INITIALIZATION =====

  private initializeMap(): void {
    mapboxgl.accessToken = this.accessToken;
    
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      ...this.mapConfig
    });

    this.addMapControls();
    this.setupMapEventListeners();
    this.setupFullscreenListener();
  }

  private addMapControls(): void {
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    this.map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
  }

  private setupMapEventListeners(): void {
    this.map.on('load', () => {
      this.loadMarkersFromAPI();
    });

    this.map.on('error', (e: any) => {
      console.error('Map error:', e);
    });
  }

  private setupFullscreenListener(): void {
    this.fullscreenChangeListener = () => {
      if (document.fullscreenElement) {
        this.handleEnterFullscreen();
      } else {
        this.handleExitFullscreen();
      }
    };
    document.addEventListener('fullscreenchange', this.fullscreenChangeListener);
  }

  // ===== FULLSCREEN HANDLING =====

  private handleEnterFullscreen(): void {
    if (this.selectedMarkerData) {
      this.showPopupForMarkerData(this.selectedMarkerData);
    }
  }

  private handleExitFullscreen(): void {
    if (this.currentOpenPopup?.isOpen()) {
      this.currentOpenPopup.remove();
      this.currentOpenPopup = null;
    }
  }

  // ===== MARKER MANAGEMENT =====

  private loadMarkersFromAPI(): void {
    this.markerDataService.getMarkerData().subscribe({
      next: (markers: MarkerData[]) => {
        this.markers = markers;
        this.addMarkersToMap();
      },
      error: (error) => {
        console.error('Error loading markers:', error);
        this.markers = [];
      }
    });
  }

  private addMarkersToMap(): void {
    this.markers.forEach(markerData => {
      this.addMarker(markerData.lng, markerData.lat, this.createPopupContent(markerData), markerData);
    });
  }

  private addMarker(lng: number, lat: number, popup?: string, markerData?: MarkerData): void {
    if (!this.map) return;

    const marker = new mapboxgl.Marker({
      color: '#99e0e6',
      scale: 0.7,
      anchor: 'center'
    }).setLngLat([lng, lat]);

    if (popup) {
      marker.setPopup(new mapboxgl.Popup().setHTML(popup));
    }

    if (markerData) {
      this.setupMarkerClickHandler(marker, markerData);
      this.markerObjects.set(markerData.id.toString(), marker);
    }

    marker.addTo(this.map);
  }

  private setupMarkerClickHandler(marker: any, markerData: MarkerData): void {
    marker.getElement().addEventListener('click', (event: Event) => {
      event.stopPropagation();
      
      this.selectMarker(markerData);
      
      if (document.fullscreenElement) {
        this.handleMarkerClickInFullscreen(marker);
      }
    });
  }

  private selectMarker(markerData: MarkerData): void {
    this.selectedMarkerData = markerData;
    this.markerClicked.emit(markerData);
  }

  private handleMarkerClickInFullscreen(marker: any): void {
    if (this.currentOpenPopup?.isOpen()) {
      this.currentOpenPopup.remove();
    }
    
    if (marker.getPopup()) {
      marker.togglePopup();
      this.currentOpenPopup = marker.getPopup();
    }
  }

  // ===== POPUP UTILITIES =====

  private createPopupContent(markerData: MarkerData): string {
    return `
      <div style="text-align: center; min-width: 200px;">
        <h3 style="margin: 0 0 8px 0; color: #333; font-size: 16px;">${markerData.title}</h3>
        <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${markerData.place}</p>
        <p style="margin: 0 0 8px 0; color: #888; font-size: 12px;">${markerData.date}</p>
        <p style="margin: 0; color: #555; font-size: 13px; line-height: 1.4;">${markerData.description}</p>
      </div>
    `;
  }

  private showPopupForMarkerData(markerData: MarkerData): void {
    const marker = this.getMarkerForMarkerData(markerData);
    if (marker?.getPopup()) {
      marker.togglePopup();
      this.currentOpenPopup = marker.getPopup();
    }
  }

  private getMarkerForMarkerData(markerData: MarkerData): any {
    return this.markerObjects.get(markerData.id.toString()) || null;
  }

  // ===== TIMELINE INTERACTION =====

  private subscribeToTimelineInteractions(): void {
    this.timelineSubscription = this.timelineInteractionService.getSelectedMarkerId().subscribe(markerId => {
      if (markerId) {
        this.highlightMarkerById(markerId);
      }
    });
  }

  private highlightMarkerById(markerId: number): void {
    const markerData = this.markers.find(m => m.id === markerId);
    if (markerData) {
      this.selectMarker(markerData);
      this.focusOnMarker(markerData);
      
      // Only show popup in fullscreen mode
      if (document.fullscreenElement) {
        this.showPopupForMarkerData(markerData);
      }
    }
  }

  private focusOnMarker(markerData: MarkerData): void {
    if (this.map) {
      this.map.flyTo({
        center: [markerData.lng, markerData.lat],
        zoom: 8,
        duration: 1000
      });
    }
  }

  // ===== PUBLIC METHODS =====

  flyTo(lng: number, lat: number, zoom: number = 12): void {
    if (this.map) {
      this.map.flyTo({
        center: [lng, lat],
        zoom: zoom,
        essential: true
      });
    }
  }

  // ===== CLEANUP =====

  private cleanup(): void {
    if (this.map) {
      this.map.remove();
    }
    document.removeEventListener('fullscreenchange', this.fullscreenChangeListener);
    this.markerObjects.clear();
  }
}
