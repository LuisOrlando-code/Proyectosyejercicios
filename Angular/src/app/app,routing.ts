
import { ModuleWithProviders  } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { AboutComponent } from './componenets/about/About.component';
import { HomeComponent } from './components/home/home.component';
import { ExternoComponent } from "./components/externno/externno";

const appRouter: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent}
];


export const appRoutingPorvider: any[] = [];

export const routing: ModuleWithProvider<any> = RouterModule.forRoot(appRouter);

