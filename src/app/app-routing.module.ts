import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HelpComponent } from './help/help.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'home', component: HomeComponent },
  {path: 'browse', component: BrowseComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'info', component: InfoComponent},
  {path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
