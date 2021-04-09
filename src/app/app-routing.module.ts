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
  {
    path: 'ideias',
    loadChildren: () => import('./ideias/ideias.module').then( m => m.IdeiasPageModule)
  },
  {
    path: 'fiscalizacao',
    loadChildren: () => import('./fiscalizacao/fiscalizacao.module').then( m => m.FiscalizacaoPageModule)
  },
  {
    path: 'ideias-ods3',
    loadChildren: () => import('./ideias-ods3/ideias-ods3.module').then( m => m.IdeiasOds3PageModule)
  },
  {
    path: 'ideias-ods4',
    loadChildren: () => import('./ideias-ods4/ideias-ods4.module').then( m => m.IdeiasOds4PageModule)
  },
  {
    path: 'ideias-ods13',
    loadChildren: () => import('./ideias-ods13/ideias-ods13.module').then( m => m.IdeiasOds13PageModule)
  },
  {
    path: 'ideias-ods11',
    loadChildren: () => import('./ideias-ods11/ideias-ods11.module').then( m => m.IdeiasOds11PageModule)
  },
  {
    path: 'colabore',
    loadChildren: () => import('./colabore/colabore.module').then( m => m.ColaborePageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'projetos-com-sociedade-civil',
    loadChildren: () => import('./projetos-com-sociedade-civil/projetos-com-sociedade-civil.module').then( m => m.ProjetosComSociedadeCivilPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./modals/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'recupera-senha',
    loadChildren: () => import('./recupera-senha/recupera-senha.module').then( m => m.RecuperaSenhaPageModule)
  },
  {
    path: 'colabore-dashboard',
    loadChildren: () => import('./colabore-dashboard/colabore-dashboard.module').then( m => m.ColaboreDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
