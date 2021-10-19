import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'the-book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'das-buch',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'background',
    loadChildren: () =>
      import('./background/background.module').then((m) => m.BackgroundModule),
  },
  {
    path: 'hintergrund',
    loadChildren: () =>
      import('./background/background.module').then((m) => m.BackgroundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
