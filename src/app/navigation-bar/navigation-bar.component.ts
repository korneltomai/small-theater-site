import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MdbCollapseModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  menuItems = [
    {linkId: 1, linkName: 'Home', linkURL: '/home'},
    {linkId: 2, linkName: 'About Us', linkURL: '/about-us'},
    {linkId: 3, linkName: 'What\'s on', linkURL: '/whats-on'},
    {linkId: 4, linkName: 'Gift', linkURL: '/gift'}
  ]
}