import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unity-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  onClick() {
    if (window.matchMedia('(max-width: 650px)')) {
      const header = document.getElementById('header');
      const nav = document.getElementById('nav');
      const nav_items = document.getElementById('nav-items');
      const menuToggle = document.getElementById('menuToggle');

      if (nav!.style.display !== 'flex') {
        header!.style.height = '100%';
        nav!.style.display = 'flex';
        nav_items!.style.display = 'flex';
        menuToggle!.innerHTML = 'close';
      } else if (nav!.style.display === 'flex') {
        header!.style.height = '';
        nav!.style.display = 'block';
        nav_items!.style.display = 'none';
        menuToggle!.innerHTML = 'menu';
      }
    }
  }

  ngOnInit(): void {}
}
