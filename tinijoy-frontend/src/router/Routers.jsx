import { Navigate, useRoutes } from 'react-router'
import Layout from '../layouts/MainLayout/Layout.jsx';
import Home from '../pages/home/Home.jsx';
import HeroSection from '../components/HeroBanner/HeroBanner.jsx';
import InstagramGallery from '../components/InstagramGallery/InstagramGallery.jsx';
import StoryVideoSection from '../components/StoryVideoSection/StoryVideoSection.jsx';
import PromoSection from '../components/PromoSection/PromoSection.jsx';
import CategoryButtons from '../components/CategoryButtons/CategoryButtons.jsx';
import Product from '../features/products/Product.jsx';
import Delivery from '../pages/delivery/Delivery.jsx';
import About from '../pages/about/About.jsx';
import Contact from '../pages/contact/Contact.jsx';
import ToyGallery from '../pages/catalog/ToyGallery.jsx';
import CheckoutPage from '../pages/CheckoutPage.jsx';

const routerList = [
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                index:true,                                         //使用index 表示默认子路由
                element: <Navigate to ='/home' replace />          //重定向到 /home
            },
            {
                path:'home',
                element:<Home />
            },
            {
                path:'banner',
                element:<HeroSection/>
            },
            {
                path:'ins',
                element:<InstagramGallery/>
            },
            {
                path:'video',
                element:<StoryVideoSection/>
            },
            {
                path:'promo',
                element:<PromoSection/>
            },
            {
                path:'categorybuttons',
                element:<CategoryButtons/>
            },
            {
                path:'catalog',
                element:<ToyGallery/>
            },
            {
                path:'delivery',
                element:<Delivery/>
            },
            {
                path:'product/:id',
                element:<Product />
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'checkout',
                element:<CheckoutPage/>
            },
        ]
    },
    // {
    //     path:'*',
    //     element:<NotFound/>           //NotFound和Layout是同级
    // }
]

export default function Router(){
    let element = useRoutes(routerList)
    return element
}


