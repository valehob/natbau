import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Rating = (props) => {

    const yellowStars = count => {
        let content = [];
        for (let i = 0; i < count; i++) {
            content.push(
                <FontAwesomeIcon icon={faStar} className="mr-1 text-amber-400" key={i}/>
            );
        }
        return content;
      };

      const greyStars = count => {
        let content = [];
        for (let i = 0; i < 5-count; i++) {
            content.push(
                <FontAwesomeIcon icon={faStar} className="mr-1" key={i}/>
            );
        }
        return content;
      };

    return (
        <div className={`flex items-center ${props.className}`}>
            {yellowStars(props.rating)}
            {greyStars(props.rating)}
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{props.rating}</p>
        </div>
    )
}

export default Rating