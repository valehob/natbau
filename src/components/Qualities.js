import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"
import { faWrench } from "@fortawesome/free-solid-svg-icons" 

const Quality = (props) => {
  return(
    <div className="text-center space-y-4">
      <div className="bg-slate-200 w-20 h-20 p-5 m-auto rounded-full flex items-center justify-center">
        {props.icon}
      </div>
      <div>
        <h2 className="text-2xl bold">{props.tag}</h2>
        <div className="w-1/3 border-2 mt-1 rounded m-auto"></div>
      </div>
 
      <p className="px-8">{props.content}</p>
    </div>
  )
}

const Qualities = (props) => {
  return (
   <div className={props.className + " flex justify-between"}>
      <Quality tag="Qualität" icon={<FontAwesomeIcon icon={faCrosshairs} className="text-sky-800" size="2xl"/>}
        content="Wir halten die höchsten Qualitätsstandards in jedem Projekt ein, um die dauerhafte Haltbarkeit und Funktionalität unserer Konstruktionen sicherzustellen."/>
      <Quality tag="Integrität" icon={<FontAwesomeIcon icon={faBusinessTime} className="text-sky-800" size="2xl"/>}
        content="Ehrlichkeit, Transparenz und ethische Praktiken sind das Herzstück unseres Geschäfts. Wir glauben daran, Vertrauen durch unsere Handlungen aufzubauen."/>
      <Quality tag="Sicherheit" icon={<FontAwesomeIcon icon={faWrench} className="text-sky-800" size="2xl"/>}
        content="Die Sicherheit unserer Mitarbeiter, Partner und der Gemeinden, in denen wir arbeiten, hat für uns oberste Priorität. Wir halten uns an Sicherheitsprotokolle, um unfallfreie Baustellen zu gewährleisten."/>
   </div>
  )
}
export default Qualities