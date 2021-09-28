import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [ 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'todolist',
    component:TodolistComponent
  },
  {
    path:'products',
    component:ProductlistComponent
  },
  {
    path:'productDetails',
    component:ProductdetailsComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"**",
    component:DefaultpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
