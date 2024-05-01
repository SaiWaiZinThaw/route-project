import { Navigate,  RouteObject,  } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Products from "./Products";

import Layout from "./Layout";
import Product1 from "./Products/Product1";
import Product2 from "./Products/Product2";
import Product3 from "./Products/Product3";
import Product4 from "./Products/Product4";




const Routers : RouteObject[] = [
    {
        path:"/",
        element:<Layout/>,
        children:[

            {
                index: true,
                element: <Navigate to={"home"}/>
            },
        {
            path:"/home",
            element:<Home/>
        },
            {
            path:"/login",
            element:<Login/>,
        },
        {
            path:"/products",
            element:<Products/>,
        },
        {
            path:"/products/1",
            element: <Product1/>
        },{
            path:"/products/2",
            element:<Product2/>
        },{
            path:"/products/3",
            element:<Product3/>
        },{
            path:"/products/4",
            element:<Product4/>
        },
        
        
    ]
    }
]

export default Routers;