import * as React from "react"
import Review from '../components/review'
import { StaticImage } from "gatsby-plugin-image"
import Qualities from "../components/qualities"
import Navbar from "../components/navbar"

const IndexPage = () => {
  return (
    <main className="px-56 bg-slate-100">
      <Navbar logo={<StaticImage src={"../images/logo1.jpeg"} alt="logo1" className="h-8 w-16 mr-3"/>}/>
      <div className="pt-20">
        <div className="header">
           <StaticImage src={"../images/header.png"} alt="logo2" style={{maxWidth:"100%", maxHeight: "100%", display: "block", zIndex: "1"}}/>
        <h1 className="text-5xl font-bold">NatBau GmbH
        <span className="text-2xl ml-2 text-gray-700">ihr Bauunternehmen in Erlangen</span>
        </h1>
        </div>
       
        <p className="px-12 pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <Qualities className="mt-20"/>
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-8">Was unsere Kunden sagen</h1>
        <div className="reviews flex justify-between items-start">
          <Review name="cool bau" rating={4} positives={["Schnell", "Zuverlässig"]}
            image={<StaticImage src={"../images/logo1.jpeg"} alt="logo1" className="object-cover"/>}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." ></Review>
          <Review name="krass build gmbh" rating={5} positives={["Zuverlässig"]}
            image={<StaticImage src={"../images/logo2.jpeg"} alt="logo2" className="object-cover"/>}
            content="Viverra justo nec ultrices dui sapien eget."></Review>
          <Review name="berlin bau" rating={4} positives={["Ordentlich", "Sauber"]}
            image={<StaticImage src={"../images/logo4.jpeg"} alt="logo3" className="object-cover"/>}
            content="Habitasse platea dictumst quisque sagittis purus. Tincidunt ornare massa eget egestas purus viverra accumsan."></Review>
        </div>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
