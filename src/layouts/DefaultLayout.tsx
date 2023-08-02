import {Outlet} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const DefaultLayout = () => {
    return (
        <div className="flex min-h-[100vh] flex-col justify-between">
           <Header/>
            <div className="mt-[72px] w-full h-full">
                <Outlet/>
            </div>


            <Footer/>
        </div>

    )
}
export default DefaultLayout;
