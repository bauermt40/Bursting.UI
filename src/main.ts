import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import { HomeComponent } from './app/home';
import { DistributionListComponent } from './app/main';
import { FooterComponent } from './app/footer';
import { ReportService } from './app/services';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DistributionListComponent,
        FooterComponent
    ],
    providers: [ReportService],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
