import { Component } from '@angular/core';
import { Navigation } from '../Left/navigation/navigation';
import { MobileNavigation } from '../Left/mobile-navigation/mobile-navigation';
import { PersistentPanel } from '../Right/persistent-panel/persistent-panel';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Navigation, MobileNavigation, PersistentPanel, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
