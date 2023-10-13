import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
  return (
    <div className="bg-slate-100">
      <Navbar logo={<StaticImage src={"../images/logo.jpeg"} alt="logo1" style={{height: "100%"}} className="w-16 mr-3 object-contain"/>}/>
      <div className="pt-20 px-56">
        {children}
      </div>
      <Footer/>
    </div>
  )
}