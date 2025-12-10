import { Routes } from '@angular/router';
import { Header } from './header/header';

export const routes: Routes = [
    {
        path:'form',
        loadComponent:()=>import('./form/form').then(m=>m.Form),
        title:'Form',
    },{
        path:'',
        component:Header,
        title:'Home',
    }
];
