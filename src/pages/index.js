import * as React from "react"
import Review from '../components/review'
import { StaticImage } from "gatsby-plugin-image"
import Qualities from "../components/Qualities"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles} className="bg-slate-100 space-y-20">
      <Qualities/>
      <div>
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
