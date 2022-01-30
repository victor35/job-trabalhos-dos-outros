import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { IndexComponent } from './pages/index/index.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { MatCardModule } from '@angular/material/card'
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { DetalhesProdutosComponent } from './pages/detalhes-produtos/detalhes-produtos.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProdutosComponent,
    DetalhesProdutosComponent,
    WishlistComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    SlickCarouselModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
