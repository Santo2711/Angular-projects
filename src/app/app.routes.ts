import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';

export const routes: Routes = [
    {
        path:'form',
        loadComponent:()=>import('./form/form').then(m=>m.Form),
        title:'Form',
        children:[{
            path:'nav',
            component:Nav,
            title:'Navigation',
        }]
    },{
        path:'',
        component:Header,
        title:'Home',
        
    }
];
