import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapview',
  imports: [],
  templateUrl: './mapview.html',
  styleUrl: './mapview.css'
})
export class Mapview implements OnInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  
  private map: any;
  private accessToken = 'pk.eyJ1IjoicGlwbGFuZ2siLCJhIjoiY21jMjFycjN6MDJ6dDJpcXd4bzE2NG02bSJ9.SYsyEBhEJnywMa1f0QZtQA'; // Replace with your actual token
  
  ngOnInit(): void {
    this.initializeMap();
  }
  
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
  
  private initializeMap(): void {
    // Set Mapbox access token
    mapboxgl.accessToken = this.accessToken;
    
    // Initialize the map - centered between Eindhoven and London
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // You can change this to other styles
      center: [3.5, 52], // Centered between Eindhoven and London
      zoom: 5, // Zoom level to show both cities
      attributionControl: true,
      logoPosition: 'bottom-left'
    });
    
    // Add navigation controls (zoom in/out, compass)
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add fullscreen control
    this.map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
    
    // Add geolocate control (find user's location)
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }),
      'top-right'
    );
    
    // Map event listeners
    this.map.on('load', () => {
      console.log('Map loaded successfully');
      this.addCityMarkers(); // Add markers when map is loaded
    });
    
    this.map.on('error', (e: any) => {
      console.error('Map error:', e);
    });
  }
  
  // Add markers for Eindhoven and London
  private addCityMarkers(): void {
    // Eindhoven coordinates: 5.4697, 51.4416
    this.addMarker(5.4697, 51.4416, `
      <div style="text-align: center;">
        <h3 style="margin: 0 0 8px 0; color: #333;">Eindhoven</h3>
        <p style="margin: 0; color: #666;">Netherlands</p>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">Technology & Design Hub</p>
      </div>
    `);
    
    // London coordinates: -0.1276, 51.5074
    this.addMarker(-0.1276, 51.5074, `
      <div style="text-align: center;">
        <h3 style="margin: 0 0 8px 0; color: #333;">London</h3>
        <p style="margin: 0; color: #666;">United Kingdom</p>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">Capital City</p>
      </div>
    `);
  }
  
  // Method to fly to a specific location
  flyTo(lng: number, lat: number, zoom: number = 12): void {
    if (this.map) {
      this.map.flyTo({
        center: [lng, lat],
        zoom: zoom,
        essential: true
      });
    }
  }
  
  // Method to add a marker
  addMarker(lng: number, lat: number, popup?: string): void {
    if (this.map) {
      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat]);
      
      if (popup) {
        marker.setPopup(new mapboxgl.Popup().setHTML(popup));
      }
      
      marker.addTo(this.map);
    }
  }
}
