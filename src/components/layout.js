import React from "react"
import Navbar from "../components/navbar"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
  return (
    <div className="px-56 bg-slate-100 yolotest">
      <Navbar logo={<StaticImage src={"../images/logo.jpeg"} alt="logo1" style={{height: "100%"}} className="w-16 mr-3 object-contain"/>}/>
      <div className="pt-20">
        {children}
      </div>
    </div>
  )
}