
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import DefaultLayout from "./layouts/DefaultLayout";

function Router() {
    return (
       <Routes>
           <Route path="/" element={<DefaultLayout/>}>
               <Route index element={<Home/>}/>
               <Route path="/projects" element={<Home/>}/>
           </Route>
       </Routes>
    );
}

export default Router as React.FC;
