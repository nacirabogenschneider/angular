import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
    {
    path: '',
        component: HomeComponent,
    },
    {
    path: 'projects', 
        component: ProjectsComponent,
    },
    {
    path: 'about-me',
        component: AboutMeComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }