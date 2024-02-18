import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PlaygroundComponent } from './components/playground/playground.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        title: 'Home Page',
    }, 
    {
        path: 'playground',
        component: PlaygroundComponent,
        title: 'Playground Page',
    }
];
