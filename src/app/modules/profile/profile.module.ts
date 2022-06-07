import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { StatisticsComponent } from './components//statistics/statistics.component';
import { UserDescriptionComponent } from './components/user-description/user-description.component';
import { RatingStarComponent } from 'src/app/shared/components/rating-star/rating-star.component';


@NgModule({
  declarations: [ProfilePageComponent, StatisticsComponent, UserDescriptionComponent, RatingStarComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
