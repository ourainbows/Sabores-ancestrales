import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {path: 'feedback', loadChildren: () => import('./modules/feedback/feedback.module').then(m => m.FeedbackModule)},
  {path: 'users-list' , loadChildren: () => import('./modules/table-users/table-users.module').then(m => m.TableUsersModule)},
  {path: 'recipes-list' , loadChildren: () => import('./modules/table-recipes/table-recipes.module').then(m => m.TableRecipesModule)},
  {path: 'report', loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
