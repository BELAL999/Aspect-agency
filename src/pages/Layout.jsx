import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { GSAPProvider } from '../contexts/context';


const Layout = () => {
    return (
        <GSAPProvider>
            <Header />
            <Outlet />
            <Footer />
        </GSAPProvider>
    )
    }

export default Layout
