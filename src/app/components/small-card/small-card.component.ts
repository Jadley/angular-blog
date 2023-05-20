import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imgCover:string ="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/aa31911c746c4d7d027b190f2e184834.jpe"

  @Input()
  cardTitle:string ="Nova temporada de Boku no Hero Academia!"

  @Input()
  Id:string ='0'


  constructor() { }

  ngOnInit(): void {
  }

}
