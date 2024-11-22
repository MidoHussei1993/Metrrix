import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component"; 
export const authRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    }, 
]