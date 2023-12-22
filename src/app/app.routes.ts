import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { DistrictComponent } from './page/district/district.component';
import { SingleComponent } from './page/single/single.component';

export const routes: Routes = [

    {
        path:'',component: HomeComponent
    },
    {
        path:'contact',component: ContactComponent
    },
    {
        path:'district',component: DistrictComponent
    },
    {
        path:'district/:id',component: SingleComponent
    }
];
