import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  imgCover:string =''
  contentTitle = ''
  contentDescription =''
  private Id:string | null ='0'

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.Id = value.get('Id'))

    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter( article => article.id == this.Id)[0]

    this.imgCover = result.imgCover
    this.contentTitle = result.title
    this.contentDescription = result.description


  }

}
