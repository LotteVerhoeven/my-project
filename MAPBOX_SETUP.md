# Mapbox Setup Instructions

## Getting Your Mapbox Access Token

1. Go to [Mapbox](https://www.mapbox.com/) and create a free account
2. Navigate to your [Account page](https://account.mapbox.com/)
3. Copy your **Default public token** or create a new one
4. Replace `YOUR_MAPBOX_ACCESS_TOKEN_HERE` in `/src/app/mapview/mapview.ts` with your actual token

## Usage

The MapView component is now configured with:

- **Full-screen display** - Takes up the entire viewport
- **Navigation controls** - Zoom in/out and compass
- **Fullscreen control** - Toggle fullscreen mode
- **Geolocation control** - Find user's current location
- **Custom methods**:
  - `flyTo(lng, lat, zoom)` - Animate to a specific location
  - `addMarker(lng, lat, popup?)` - Add markers with optional popups

## Map Styles

You can change the map style by modifying the `style` property in the map initialization:

```typescript
style: 'mapbox://styles/mapbox/streets-v12' // Current
// Other options:
// 'mapbox://styles/mapbox/satellite-v9'
// 'mapbox://styles/mapbox/outdoors-v12'
// 'mapbox://styles/mapbox/light-v11'
// 'mapbox://styles/mapbox/dark-v11'
```

## Security Note

For production applications, consider:
- Using environment variables for the access token
- Implementing URL restrictions on your Mapbox token
- Using a server-side proxy for sensitive operations

## Example Usage

```typescript
// In your component
export class YourComponent {
  @ViewChild(Mapview) mapView!: Mapview;
  
  goToLocation() {
    this.mapView.flyTo(-74.006, 40.7128, 14); // New York City
  }
  
  addLocationMarker() {
    this.mapView.addMarker(-74.006, 40.7128, '<h3>New York City</h3><p>The Big Apple</p>');
  }
}
```
