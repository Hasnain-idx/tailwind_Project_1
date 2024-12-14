import React from 'react'
import React , {useState} from 'react'

const OnClick = () => {
    const {show , setShow} = useState(false);
    const ShowName = (name) =>{
        if(show == true){
            setShow(false);
        }
        else {
            setShow(true);
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default OnClick
