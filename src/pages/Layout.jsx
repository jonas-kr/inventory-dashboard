import { Outlet } from "react-router-dom"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Layout() {
    return (
        < >
            <main className="p-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] 2xl:px-[11vw] bg-slate-200">
                <Outlet />
            </main>
        </>
    )
}

export default Layout