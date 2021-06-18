import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './header/site-header/site-header.component';
import { ClientsService } from './services/clients.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './shared/search/search.component';
import { ClientIllustrationDetailsComponent } from './pages/client-illustration-details/client-illustration-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    routingComponents,
    SearchComponent,
    ClientIllustrationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
