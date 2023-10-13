import * as React from "react"
import Review from '../components/review'
import { StaticImage } from "gatsby-plugin-image"
import Qualities from "../components/qualities"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
        <div className="header">
           <StaticImage src={"../images/head.png"} alt="logo2" style={{height: "450px", display: "block", zIndex: "1", marginLeft: "-224px", width:"100vw"}}/>
        <h1 className="text-5xl font-bold">NatBau GmbH
        <span className="text-2xl ml-2 text-gray-700">ihr Bauunternehmen in Nürnberg</span>
        </h1>
        </div>
       
        <p className="px-12 pt-12">
        Willkommen bei NATBAU - Ihr vertrauenswürdiger Baupartner in Nürnberg
Bei NatBau sind wir stolz darauf, ein führendes Bauunternehmen in Nürnberg zu sein, das sich der Exzellenz in jeder Hinsicht unserer Arbeit verschrieben hat. 
Mit einer reichen Geschichte erfolgreicher Bauvorhaben haben wir das Vertrauen und den Respekt von Kunden in der gesamten Region gewonnen.

Unsere Vision und Werte

Unsere Vision ist einfach, aber kraftvoll: Ihr Wunsch durch nachhaltige und innovative Baulösungen zu gestalten. Wir werden von einer Reihe von Kernwerten geleitet, die jede unserer Bemühungen lenken:
        </p>
      <Qualities className="mt-20"/>
      <p className="px-12 pt-12">
      Warum NatBau wählen
Die Wahl von NatBau bedeutet die Wahl eines Partners, der sich darauf konzentriert, Versprechen pünktlich und im Budgetrahmen zu erfüllen. Wir bringen einen kundenorientierten Ansatz in jedes Projekt ein und passen Lösungen an Ihre speziellen Bedürfnisse an. Unser Team aus Fachleuten, von Architekten bis zu Handwerkern, arbeitet zusammen, um Ihre Vision zum Leben zu erwecken.
Begleiten Sie uns auf einer Reise zur Neudefinition des Bauens. Kontaktieren Sie NatBau, um Ihr nächstes Projekt zu besprechen, und erleben Sie den Unterschied, mit einem Bauunternehmen zusammenzuarbeiten, das Qualität, Integrität, Innovation und Sicherheit über alles andere stellt.
      </p>
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
      
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
