import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'Home', component: HomeComponent },
        { path: 'About', component: AboutComponent },
        { path: 'Services', component: ServicesComponent },
        { path: 'Projects', component: ProjectsComponent },
        { path: 'Contact', component: ContactComponent },
        { path: 'ProjectDetails', component: ProjectDetailsComponent },
];
