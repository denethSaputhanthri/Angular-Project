import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { Dashboard } from './page/dashboard/dashboard';
import { Item } from './page/item/item';
import { Customer } from './page/customer/customer';
import { Order } from './page/order/order';
import { Addcustomer } from './page/customer/addcustomer/addcustomer';
import { Viewcustomer } from './page/customer/viewcustomer/viewcustomer';
import { Additem } from './page/item/additem/additem';
import { ViewOrder } from './page/order/view-order/view-order';
import { AddOrder } from './page/order/add-order/add-order';
import { Home } from './page/dashboard/home/home';

export const routes: Routes = [
    {
        path:"",
        component:Login,
    },
    {
        path: "login",
        component:Login,
    },
    {
        path:"dashboard",
        component:Dashboard,
        children:[
        {
            path:"",
            component: Home,
        },
        {
            path:"customer",
            component:Customer,
            children:[
                {
                    path:"addcustomer",
                    component:Addcustomer,
                },
                {
                    path:"viewcustomer",
                    component:Viewcustomer,
                },
            ]
        },
        {
            path:"item",
            component:Item,
            children:[
                {
                    path:"additem",
                    component:Additem,
                },
                {
                    path:"viewitem",
                    component:ViewOrder,
                },
            ]
        },
        {
            path:"order",
            component:Order,
            children:[
                {
                    path:"addorder",
                    component:AddOrder,
                },
                {
                    path:"vieworder",
                    component:ViewOrder,
                },
            ]
        },
        ]

    },

];
