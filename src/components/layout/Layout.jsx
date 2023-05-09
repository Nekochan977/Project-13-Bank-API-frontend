import { Outlet } from "react-router-dom"
import Navigation from "../navigation/Navigation"
import Footer from "../footer/Footer"

const Layout = () => {
    return(
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout

