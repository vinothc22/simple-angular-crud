import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateIllustrationComponent } from './pages/create-illustration/create-illustration.component';
import { ClientIllustrationDetailsComponent } from './pages/client-illustration-details/client-illustration-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientDetailsComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  { path: 'create-illustration', component: CreateIllustrationComponent },
  { path: 'client-illustration-details/:id/:illustrationId/:url', component: ClientIllustrationDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientDetailsComponent, PageNotFoundComponent, CreateIllustrationComponent, ClientIllustrationDetailsComponent]
