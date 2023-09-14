import * as React from "react"
import Rating from './rating'

const Review = (props) => {
  return (
    <div className="review">
        <div className="review-head">
            <img className="reviewer-image"></img>
            <p className="reviewer-name">{props.name}</p>
        </div>
        <p className="review-content">{props.content}</p>
        <Rating rating={props.rating}></Rating>
    </div>
  )
}
export default Review