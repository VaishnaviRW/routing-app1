import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FairsDashboardComponent } from "./fairs-dashboard/fairs-dashboard.component";
import { HomeDashboardComponent } from "./home-dashboard/home-dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./products-dashboard/product-detail/product-detail.component";
import { ProductFormComponent } from "./products-dashboard/product-form/product-form.component";
import { ProductsDashboardComponent } from "./products-dashboard/products-dashboard.component";
import { UserFormComponent } from "./users-dahboard/user-form/user-form.component";
import { UsersDashboardComponent } from "./users-dahboard/users-dahboard.component";
import { UserDetailsComponent } from "./users-dahboard/users-details/users-details.component";
import { FairsDetailsComponent } from "./fairs-dashboard/fairs-details/fairs-details.component";



const routes: Routes = [
    {
        path: 'home',
        component: HomeDashboardComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersDashboardComponent,
        children: [
            {
                path: 'addUser',
                component: UserFormComponent
            },
            {
                path: ':userID',
                component: UserDetailsComponent
            },
            {
                path: ':userID/edit',
                component: UserFormComponent
            }
        ]
    },
    {
        path: 'products',
        component: ProductsDashboardComponent,
        children: [
            {
                path: 'addProduct',
                component: ProductFormComponent
            },
            {
                path: ':prodID',
                component: ProductComponent
            },
            {
                path: ':prodID/edit',
                component: ProductFormComponent
            }
        ]
    },
    {
        path: 'fairs',
        component: FairsDashboardComponent,
        children: [
            {
                path: ':fairID',
                component: FairsDetailsComponent
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRountingModule {

}