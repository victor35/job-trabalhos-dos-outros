import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { DetalhesProdutosComponent } from './pages/detalhes-produtos/detalhes-produtos.component';
import { IndexComponent } from './pages/index/index.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html',
    pathMatch: 'full',
  },
  {
    path: 'index.html',
    component: IndexComponent,
  },
  {
    path: 'produtos.html',
    component: ProdutosComponent
  },
  {
    path: 'produto.html',
    component: DetalhesProdutosComponent
  },
  {
    path: 'wishlist.html',
    component: WishlistComponent
  },
  {
    path: 'admin.html',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
