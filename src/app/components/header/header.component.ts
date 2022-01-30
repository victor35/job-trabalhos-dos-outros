import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToWishList() {
    this.router.navigate(['/wishlist.html']);
  }

  goToHome(){
    this.router.navigate(['/']);

  }

  openMenu(event: any) {


    switch (event.innerText) {
      case "Homem":
        let element: HTMLElement = document.getElementsByClassName('menuHomem')[0] as HTMLElement;
        element.click()
        break;
      case "Mulher":
        let element1: HTMLElement = document.getElementsByClassName('menuMulher')[0] as HTMLElement;
        element1.click()
        break;
      case "Criança":
        let element2: HTMLElement = document.getElementsByClassName('menuCrianca')[0] as HTMLElement;
        element2.click()
        break;
      case "Acessórios":
        let element3: HTMLElement = document.getElementsByClassName('menuAcessorios')[0] as HTMLElement;
        element3.click()
        break;

      default:
        break;
    }
  }

  closeMenu(event: any) {
    switch (event.innerText) {
      case "Homem":
        let element: HTMLElement = document.getElementsByClassName('menuHomem')[0] as HTMLElement;
        element.click()
        break;
      case "Mulher":
        let element1: HTMLElement = document.getElementsByClassName('menuMulher')[0] as HTMLElement;
        element1.click()
        break;
      case "Criança":
        let element2: HTMLElement = document.getElementsByClassName('menuCrianca')[0] as HTMLElement;
        element2.click()
        break;
      case "Acessórios":
        let element3: HTMLElement = document.getElementsByClassName('menuAcessorios')[0] as HTMLElement;
        element3.click()
        break;

      default:
        break;
    }
  }
}
