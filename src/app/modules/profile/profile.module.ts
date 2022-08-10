import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { StatisticsComponent } from './components//statistics/statistics.component';
import { UserDescriptionComponent } from './components/user-description/user-description.component';
import { TabRecipesComponent } from './components/tab-recipes/tab-recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProfilePageComponent, StatisticsComponent, UserDescriptionComponent, TabRecipesComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
