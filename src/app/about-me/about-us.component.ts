import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unity-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  showDiv(id: string, title: string) {
    const show = document.getElementById(id);
    const titleColor = document.getElementById(title);

    if (show!.style.display !== 'block') {
      show!.style.display = 'block';
      titleColor!.style.backgroundColor = '#141cba';
      titleColor!.style.color = '#fff';
    } else {
      show!.style.display = 'none';
      titleColor!.style.backgroundColor = '#fff';
      titleColor!.style.color = '#000';
    }
  }

  ngOnInit(): void {}
}
