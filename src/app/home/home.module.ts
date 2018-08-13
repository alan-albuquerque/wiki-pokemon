import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WikiModule } from '@app/wiki/wiki.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule,
    WikiModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
