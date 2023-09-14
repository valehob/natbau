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

const Qualities = () => {
  return (
   <div className="flex justify-between">
      <Quality tag="Qualität" icon={<FontAwesomeIcon icon={faCrosshairs} className="text-sky-800" size="2xl"/>}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu. "/>
      <Quality tag="Pünktlichkeit" icon={<FontAwesomeIcon icon={faBusinessTime} className="text-sky-800" size="2xl"/>}
        content="Sit amet nisl purus in. Gravida cum sociis natoque penatibus et magnis dis parturient. Odio pellentesque diam volutpat commodo sed egestas. "/>
      <Quality tag="Erfahrung" icon={<FontAwesomeIcon icon={faWrench} className="text-sky-800" size="2xl"/>}
        content="Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Egestas integer eget aliquet nibh praesent tristique magna. Ullamcorper morbi tincidunt ornare massa."/>
   </div>
  )
}
export default Qualities