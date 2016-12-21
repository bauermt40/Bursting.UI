import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'jquery';

import { AppComponent } from './app.component';
import { 
  FooterComponent, 
  DistributionListComponent, 
  HeaderComponent 
} from './ui';

import { DistributionListService } from './services/distribution-list.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DistributionListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DistributionListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
