import Header from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import"./Footer.css"
import"./Navbar.css"
import"./HomePageResponsiv.css"
export default function HomePage(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}