import * as React from "react"
import Review from '../components/review'
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 className="text-3xl font-bold mb-8">
        Was unsere Kunden sagen
      </h1>
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
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
