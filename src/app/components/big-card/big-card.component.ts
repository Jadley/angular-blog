import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  imgCover:string ="https://s2.glbimg.com/cI-azLksn8dQrIUTFftf_IMMbSE=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/J/8/EbfA0BTv2pV98gASWdfA/f5d0f04e85a224493fe9caa2e59740811630901421-main.png"
  cardTitle:string ="Kimetsu no Yaiba"
  cardDescription:string ="Fique por dentro do anime do momento, nova temporada e mais..."

  constructor() { }

  ngOnInit(): void {
  }

}
