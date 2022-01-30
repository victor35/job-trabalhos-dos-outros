import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  slideConfig: any;

  slides: any[] = [
    '../../../assets/img/slider1.jpg',
    '../../../assets/img/slider2.jpg',
    '../../../assets/img/slider3.jpg'
  ]

  cookie: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem("userCookie");
    console.log('user', user);
    
    if (user) {
      this.cookie = false;
    } else {
      localStorage.setItem("userCookie", "1");
      this.cookie = true;
    }
  }

  ngOnChanges() {
    this.slideConfig = {
      infinite: true,
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 899,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '75px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      ]
    };
  }

}
