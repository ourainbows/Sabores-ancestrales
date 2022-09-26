import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { FilterComponent } from './page/filter.component';

@NgModule({
  declarations: [
    FilterComponent,
    SliderComponent
  ],
  imports: [CommonModule, CoreModule, SharedModule, MatIconModule, FormsModule],
})
export class FilterModule {}
