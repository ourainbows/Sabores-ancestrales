import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'basics', pathMatch: 'full'},
  { path: 'basics', loadChildren: () => import('./modules/basics/basics.module').then(m => m.BasicsModule) },
  { path: 'extra', loadChildren: () => import('./modules/extra-data/extra-data.module').then(m => m.ExtraDataModule) },
  { path: 'steps', loadChildren: () => import('./modules/steps/steps.module').then(m => m.StepsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRecipeRoutingModule { }
