import React, { useState } from 'react';
import DisplayComponent from './components/DisplayComponent';
import BtnndspComponent from './components/Btndspcomponent';
import './App.css';


function App()
{  
  const [time, setTime] = useState({ms:0,s:0,m:0,h:0});
  const [interv, setinterv] = useState();
  const [status, setstatus] = useState(0); 

  const start = () => {
    run();
    setstatus(1);
    setinterv(setInterval(run,10));

  }
  var UpdateMS = time.ms,UpdateS = time.s,UpdateM = time.m,UpdateH = time.h;
  const run = () => {
   if(UpdateM === 60){
    UpdateH++;
    UpdateM=0;
  }
  if(UpdateS === 60){
    UpdateM++;
    UpdateS=0;
  }
  if(UpdateMS === 100){
    UpdateS++;
    UpdateMS=0;
  }
  UpdateMS++;
  return setTime({ms:UpdateMS,s:UpdateS,m:UpdateM,h:UpdateH});
  };

  const stop = () =>{
    clearInterval(interv);
    setstatus(2);
    
  }

  const reset = () =>{
    clearInterval(interv);
    setstatus(0);
    setTime({ms:0,s:0,m:0,h:0});
    
  }

  const resume = () => start();
   return (
  <div className="main-section">
    <div className="clock-holder">
      <div className="Stopwatch">
        <h1><DisplayComponent time ={time}/></h1>
        <BtnndspComponent status={status} stop={stop} reset={reset} resume={resume} start={start} />


      </div>
    </div>
  </div>

)
 
}



 export default App;