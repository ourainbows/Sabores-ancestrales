import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { StatisticsComponent } from './components//statistics/statistics.component';
import { UserDescriptionComponent } from './components/user-description/user-description.component';
import { TabRecipesComponent } from './components/tab-recipes/tab-recipes.component';


@NgModule({
  declarations: [ProfilePageComponent, StatisticsComponent, UserDescriptionComponent, TabRecipesComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
