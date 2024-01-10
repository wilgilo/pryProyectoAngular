import { Component } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LabComponent } from '../pages/lab/lab.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LoginComponent } from '../pages/login/login.component';

export const routes: Route[]= [
     //defino los dos path
    {
        path:'',
        component: HomeComponent
    },

    {
        path:'lab',
        component: LabComponent
    },

    {
        path:'about',
        component: AboutComponent
    },

    {
        path:'contact',
        component: ContactComponent
    },

    {
        path:'login',
        component: LoginComponent
    }
]
;
