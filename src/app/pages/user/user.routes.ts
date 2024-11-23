import { Route } from "@angular/router";  
import { UserComponent, UserProfileComponent, UserProfileViewComponent } from "./ui";
 export const userRoutes: Route[] = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: '',
                redirectTo: 'profile-view',
                pathMatch: 'full'
            },
           {path: 'profile', component: UserProfileComponent},
           {path: 'profile-view', component: UserProfileViewComponent}
        ]
    }, 
]