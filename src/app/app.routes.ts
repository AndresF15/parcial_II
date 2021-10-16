import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JugadorComponent } from './components/jugadores/jugador/jugador.component';


const APP_ROUTES: Routes=[
    {path: 'Players', component:JugadoresComponent, 
    children:[
        {path: '', component: JugadorComponent}
    ]},
    {path: 'Header', component:HeaderComponent},
    {path:'Footer', component:FooterComponent},
    {path: '**', pathMatch:'full', redirectTo:'Players'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);