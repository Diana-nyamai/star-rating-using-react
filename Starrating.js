import React ,{useState}from 'react'
import { FaStar } from 'react-icons/fa';

 

const Starratings =()=>{
    const [rating , setRating] =useState(null)
    const [hover ,setHover] = useState(null)
    return (
        <div className="starratings">
            {[...Array(5)].map((star ,i)=>{
                const ratingValue=i + 1;
                return (
                <label>
                    <input type="radio" name="rating" value={ratingValue}
                    onClick={()=> setRating(ratingValue)}
                    
                    />
                    <FaStar className="star" 
                    color={ratingValue <=( hover||rating)? "#ff9800" : "#e4e5e9" }
                    size={100}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={()=> setHover(null)}
                    />
                </label>
               );
            })}
           
        </div>
    );
}

export default Starratings
