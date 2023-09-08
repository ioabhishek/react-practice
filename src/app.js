import React, {lazy, Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery")); 
const About = lazy(() => import("./components/About")); 

const AppLayout = () => {
   const [userName, setUserName] = useState();

   useEffect(() => {
      const data = {
         name: "Abhishek"
      }
      setUserName(data.name)
   }, [])

   return (
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
         <div className="app">
            <Header />
            <Outlet/>
         </div>
      </UserContext.Provider>
   );
};

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children: [
         {
            path: "/",
            element: <Body/>
         },
         {
            path: "/about",
            element: <Suspense fallback={<h1>Im Loading</h1>}><About/></Suspense>
         },
         {
            path: "/contact",
            element: <Contact/>
         },
         {
            path: "/grocery",
            element: <Suspense fallback={<h1>Im Loading</h1>}><Grocery/></Suspense>
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>
         }
      ]
   },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
