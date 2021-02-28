import loading from "../../../assets/Images/loading.svg";
import React from "react";


let Preloader = (props) => {
    return(
        <div  style = {{backgroundColor: 'wheat'}}>
            <img src ={loading} />
        </div>
    )
}

export default Preloader;