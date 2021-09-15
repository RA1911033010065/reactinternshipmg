import React from 'react';

function BtnndspComponent(props)
{ return (
  <div>
    { (props.status === 0)?
    <button className="testcss" onClick={props.start}>Start</button> : ""}
   
   {(props.status === 1)?
       <div>
         <button className="Stopwatch-btn Stopwatch-btn-red"
         onClick={props.reset}>Reset</button>
         <button className="Stopwatch-btn Stopwatch-btn-yel"
         onClick={props.stop}>Stop</button>

       </div> : ""

  }
  {(props.status === 2)?
       <div>
         <button className="Stopwatch-btn Stopwatch-btn-red"
         onClick={props.reset}>Reset</button>
         <button className="Stopwatch-btn Stopwatch-btn-yel"
         onClick={props.resume}>Resume</button>

       </div> : ""

  }
      
    
  </div>

)
 
}
 export default BtnndspComponent;