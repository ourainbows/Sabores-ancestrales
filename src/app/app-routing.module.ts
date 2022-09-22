import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { FilterComponent } from './modules/filter/filter.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./modules/recipe/recipe.module').then((m) => m.RecipeModule),
  },
  {
    path: 'new-recipe',
    loadChildren: () =>
      import('./modules/new-recipe/new-recipe.module').then(
        (m) => m.NewRecipeModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/auth/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'activate/:token',
    loadChildren: () =>
      import('./modules/auth/activate/activate.module').then(
        (m) => m.ActivateModule
      ),
  },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
