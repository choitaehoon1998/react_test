import React, {useState, useEffect} from "react";
import { FaStar } from "react-icons/fa";
import "./compostyle.css";

const ARRAY = [0, 1, 2, 3, 4]

export const CountingStar = () => {
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    
    const StarClick = index =>{
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++){
            clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
        
    };

    useEffect(() => {
        sendReview();
    }, [clicked]);

    const sendReview = () =>{
        let score = clicked.filter(Boolean).length;
    };
    console.log(clicked);
    return(
        <div className="Stars">
            {ARRAY.map((el,idx) => {
                return(
                    <FaStar 
                    key={idx} 
                    size="28" 
                    onClick={() => StarClick(el)} 
                    className={clicked[el] && 'redStar'} />
                );
            })}
        </div>
    );
}
