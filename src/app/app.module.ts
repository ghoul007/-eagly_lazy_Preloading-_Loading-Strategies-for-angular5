import { LoadChildren, PreloadAllModules, RouterModule, ROUTES } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ShopModule} from './shop/shop.module';
import { AppComponent } from './app.component';
import { AppCustomPreloader } from './app-routing-loader';
import { HomeComponent } from './home/home/home.component';


export const routes = [   
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
{ path: '**', component: HomeComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
