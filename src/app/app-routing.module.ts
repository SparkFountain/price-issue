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
  ...['the-book', 'das-buch'].map((path: string) => ({
    path,
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  })),
  ...['background', 'hintergrund'].map((path: string) => ({
    path,
    loadChildren: () =>
      import('./background/background.module').then((m) => m.BackgroundModule),
  })),
  ...['contact', 'kontakt'].map((path: string) => ({
    path,
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  })),
  ...['imprint', 'impressum'].map((path: string) => ({
    path,
    loadChildren: () =>
      import('./imprint/imprint.module').then((m) => m.ImprintModule),
  })),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
