import { NgModule } from '@angular/core';
import { BrowserModule } from ' @angular/paltfom-browser';
import { routing, appRoutingProviders  } from '../app.routing';
import { appRoutingModule } from './app,routing.module';
import { FormModule } from '@angular/forms';
import { calculadoraPipe } from './pipes/calculadora.pipe';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExternnoComponent } from './components/externno/externno';
import { HtmlParser } from '@angular/compiler';

@NgModule((
    declarations: [
        AppComponent, AboutComponent, HomeComponent, ExternnoComponent, calculadoraPipe
    ],
    imports: [
        BrowserModule,
        appRoutingModule,
        FormsModule,
        HttpClientModule,
        rooting
    ],
    providers: [appRoutingModule],

    bootstrap: [AppComponent]
)) 
export class AppModule {}