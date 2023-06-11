import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { ParentProductsComponent } from './components/parent-products/parent-products.component';
import { PrdStyleDirective } from './Directives/prd-style.directive';
import { CreditCardStylePipe } from './Pipes/credit-card-style.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignUpComponent } from './components/sign-up/Template/sign-up.component';
import { ReactiveFormComponent } from './components/sign-up/reactiveForm/reactive-form/reactive-form.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddEditComponent } from './Admin/add-edit/add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BannerComponent,
    ProductsComponent,
    ParentProductsComponent,
    PrdStyleDirective,
    CreditCardStylePipe,
    ProductDetailsComponent,
    NotFoundComponent,
    CartComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignUpComponent,
    ReactiveFormComponent,
    LogInComponent,
    AdminComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
