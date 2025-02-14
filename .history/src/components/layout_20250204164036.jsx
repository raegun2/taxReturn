import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            
        </>
    );
}
