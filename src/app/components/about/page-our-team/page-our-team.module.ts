import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOurTeamComponent } from './page-our-team.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { TitleComponent } from './title/title.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';

@NgModule({
  declarations: [
    PageOurTeamComponent,
    FilterComponent,
    TitleComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PageOurTeamModule { }
