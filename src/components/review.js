import * as React from "react"
import Rating from './rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

const Review = (props) => {
  return (
    <div className="review max-w-sm p-6 bg-white  rounded-lg drop-shadow-md font-bold">
        <div className="review-head flex items-center mb-4">
            <div className="w-20 mr-5">
              {props.image}
            </div>
            <h6 className="reviewer-name text-xl tracking-tight">{props.name}</h6>
        </div>
        <div className="space-y-4">
          <p className="review-content text-sm text-gray-500">{props.content}</p>
        <Rating className="py-2" rating={props.rating}></Rating>
        <div className="flex space-x-2">
          {props.positives?.map((positive) => 
              <div className="px-3 py-1 w-fit text-sm rounded-full border-2 text-green-500 border-green-500 bg-green-100">
                <FontAwesomeIcon icon={faCirclePlus} inverse className="bg-green-500 rounded-full mr-1"/>
                {positive}
              </div>
            )}
        </div>
        </div>
        
    </div>
  )
}
export default Review