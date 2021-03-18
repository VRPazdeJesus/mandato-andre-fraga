import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nosso-mandato',
    loadChildren: () => import('./nosso-mandato/nosso-mandato.module').then( m => m.NossoMandatoPageModule)
  },
  {
    path: 'projeto-de-lei',
    loadChildren: () => import('./projeto-de-lei/projeto-de-lei.module').then( m => m.ProjetoDeLeiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
