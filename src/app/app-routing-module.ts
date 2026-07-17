import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneStoreBackgrounds } from './one-store-backgrounds/one-store-backgrounds';
import { OneStoreAbout } from './one-store-about/one-store-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'backgrounds',
    pathMatch: 'full',
  },
  {
    path: 'backgrounds',
    component: OneStoreBackgrounds,
  },
  {
    path: 'about',
    component: OneStoreAbout,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
