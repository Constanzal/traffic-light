import React, { useState } from 'react'
import './App.css';

const App = () => {
  let [shadow1, setShadow1] = useState("");
  let [shadow2, setShadow2] = useState("");
  let [shadow3, setShadow3] = useState("");
  
  return (
    <div className="traffic-light">
      <div className="palito"></div>
      <div className="cuerpo">
        <div className="luz roja" style={{boxShadow: shadow1}} onClick={()=> {setShadow1("0 0 100px 50px rgb(236, 84, 79)")}}></div>
        <div className="luz amarilla" style={{boxShadow: shadow2}} onClick={()=>{setShadow2("0 0 100px 50px rgb(236, 212, 79)")}}></div>
        <div className="luz verde" style={{boxShadow: shadow3}} onClick={()=>{setShadow3("0 0 100px 50px rgb(79, 236, 113)")}}></div>
      </div>
    </div>
  );
}

export default App;
