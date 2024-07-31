import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-card.component.html',
  styleUrl: './header-card.component.css'
})
export class HeaderCardComponent implements OnInit{


  headerOptions:string[] = [
    "Home",
    "Products   ⬇",
    "Solutions   ⬇",
    "Pricing",
    "Resources   ⬇",
    "Company   ⬇",
    "Careers"
  ]
  constructor() {
    
  }
  ngOnInit(): void {
    
  }


}
