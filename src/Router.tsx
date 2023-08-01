
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import DefaultLayout from "./layouts/DefaultLayout";
import Projects from "./pages/projects";

function Router() {
    return (
       <Routes>
           <Route path="/" element={<DefaultLayout/>}>
               <Route index element={<Home/>}/>
               <Route path="/projects" element={<Projects/>}/>
           </Route>
       </Routes>
    );
}

export default Router as React.FC;
