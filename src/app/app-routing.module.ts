import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentProductsComponent } from './components/parent-products/parent-products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReactiveFormComponent } from './components/sign-up/reactiveForm/reactive-form/reactive-form.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddEditComponent } from './Admin/add-edit/add-edit.component';
import { userAuthGuard } from './Guards/user-auth.guard';


const routes: Routes = [

{path:"Home",component:ParentProductsComponent,title:"Home"},
{path:"AboutUs",component:AboutUsComponent,title:"About Us"},
{path:"ContactUs",component:ContactUsComponent,title:"Contact Us"},
{path:"Cart",component:CartComponent,title:"Cart", canActivate: [userAuthGuard]},
{path:"signUp",component:ReactiveFormComponent,title:"Sign Up"},
{path:"login",component:LogInComponent,title:"LOGIN"},
{path:"admin",component:AdminComponent,title:"ADMIN"},
{path:"addEdit",component:AddEditComponent,title:"ADD/EDIT"},
{path:"productDetails/:prodID",component:ProductDetailsComponent,title:"Product Details"},
{path:"",component:ParentProductsComponent,title:"Home"},


//=======LAZY LOADING========================

{
  path: 'user',
  loadChildren: () => import('./components/User/user/user.module').then(m => m.UserModule)
},


//=============================================
{path:"**",component:NotFoundComponent,title:"404 Page Not Found"}

];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
