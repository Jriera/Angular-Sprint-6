import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

@Input() frasesEscena:string[];
currentSentence:number;
  constructor() { 
    this.frasesEscena=[]
    this.currentSentence=1
    
  }

  ngOnInit(): void {
   
  }
  nextSentence(){
    this.currentSentence++
    this.currentSentence>3?this.currentSentence=0:null;
  }
  prevSentence(){
    this.currentSentence--;
    this.currentSentence<0?this.currentSentence=3:null;
  }
  

  

}
