import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notice-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './notice-card.component.html',
  styleUrl: './notice-card.component.css'
})
export class NoticeCardComponent implements OnInit{


  imagem: string = "assets/img/GeoIcon.png";

  description : string[] = [
    'Design',
    'Product',
    'Reseach',
    'Interviews',
    'Frameworks'
  ]

  cardDescription : string[] = []

  
  constructor() {
    
  }

  ngOnInit(): void {
      this.selectRandomDescriptions()
    
  }

  selectRandomDescriptions(): void {


      let numbersDescription = Math.random()*this.description.length

      for(let iterator = 0; iterator < numbersDescription; iterator++){

        const randomIndex = Math.floor(Math.random() * this.description.length);
 
        const descriptionIndex = this.cardDescription.indexOf(this.description[iterator])

        this.cardDescription.push(this.description[iterator])

        
      }
    }

}
