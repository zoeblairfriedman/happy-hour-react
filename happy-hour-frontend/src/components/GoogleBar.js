import React from 'react'




const GoogleBar = (props) => {
       
            if (props.bar !== null){
            return (
                <div>
                    <p>{props.bar.name}</p>
                </div>
            )
        } else {
            return <div>Error</div>
        }
 }

export default GoogleBar;  