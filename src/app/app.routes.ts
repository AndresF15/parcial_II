import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';


const APP_ROUTES: Routes=[
    {path: 'Players', component:JugadoresComponent},
    {path: 'Header', component:HeaderComponent},
    {path:'Footer', component:FooterComponent},
    {path: '**', pathMatch:'full', redirectTo:'Players'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);