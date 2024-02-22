import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

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
    },
    {
        path: 'widgets',
        component: WidgetsComponent,
        title: 'Widgets Page',
    }
];
