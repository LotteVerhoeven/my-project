import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-navigation',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './mobile-navigation.html',
  styleUrls: ['./mobile-navigation.css']
})
export class MobileNavigation {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
