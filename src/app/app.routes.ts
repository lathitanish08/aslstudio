import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
export const routes: Routes = [
        { 
                path: '',
                component:HomeComponent
        },
        { 
                path: 'Home', 
                loadComponent: () => import('../app/home/home.component').then(m => m.HomeComponent) 
        },
        { 
                path: 'About', 
                loadComponent: () => import('../app/about/about.component').then(m => m.AboutComponent) 
        },
        { 
                path: 'Services', 
                loadComponent: () => import('../app/services/services.component').then(m => m.ServicesComponent)
        },
        {
                path: 'Projects', 
                loadComponent: () => import('../app/projects/projects.component').then(m => m.ProjectsComponent)
        },
        { 
                path: 'Contact', 
                loadComponent: () => import('../app/contact/contact.component').then(m => m.ContactComponent)
        },
        { 
                path: 'ProjectDetails', 
                loadComponent: () => import('../app/project-details/project-details.component').then(m => m.ProjectDetailsComponent)
        },
];
