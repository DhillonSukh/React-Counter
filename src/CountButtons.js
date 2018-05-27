import React from 'react';
const countButtons =(props) =>{
    return(
        <div>
            <button className="btn btn-primary" type="button" onClick={props.plusHandler}>plus</button>
            <button className="btn btn-primary" type="button" onClick={props.minusHandler}>minus</button>
            <button className="btn btn-primary" type="button" onClick={props.resetHandler}>Reset</button>
        </div>
    );
}
export default countButtons;