import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component'
import { EducationComponent } from '../education/education.component';
import { ImprintComponent } from '../imprint/imprint.component'
import { PrivacyComponent } from '../privacy/privacy.component';


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
        children: 
        [
            {
                path: 'skills',
            component: SkillsComponent
            },
            {
                path: 'experience',
            component: ExperienceComponent
            },
            {
                path: 'education',
            component: EducationComponent
            }
        ]
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'imprint',
        component: ImprintComponent,
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
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