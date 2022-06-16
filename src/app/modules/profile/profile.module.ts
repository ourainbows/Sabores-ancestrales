import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { StatisticsComponent } from './components//statistics/statistics.component';


@NgModule({
  declarations: [ProfilePageComponent, StatisticsComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
