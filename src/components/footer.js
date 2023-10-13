import * as React from "react" 
import { Link } from "gatsby"

const Footer = (props) => {
  return(
    <div className="bg-slate-400 text-center mt-5 py-2">
        <Link to="/impressum" className="text-white hover:text-black">Impressum</Link>
    </div>
  )
}

export default Footer