import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CdainfoSharedModule } from 'app/shared/shared.module';
import { CdainfoCoreModule } from 'app/core/core.module';
import { CdainfoAppRoutingModule } from './app-routing.module';
import { CdainfoHomeModule } from './home/home.module';
import { CdainfoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CdainfoSharedModule,
    CdainfoCoreModule,
    CdainfoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CdainfoEntityModule,
    CdainfoAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class CdainfoAppModule {}
