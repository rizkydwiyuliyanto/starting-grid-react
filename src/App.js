import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Bar from './components/Bar';
import Lights from './components/Lights';
import Time from './components/Time';
import Button from './components/Button'
// import { f1_logo } from ''
import { useState,useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [steady, setSteady] = useState([]);
  const [ready, setReady] = useState(true);
  const [second, setSecond] = useState(0);
  const [milSecond1, setMilSecond1] = useState(0);
  const [milSecond2, setMilSecond2] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [continu, setContinu] = useState(true);
  const [starts,setStarts] = useState(false);

  useEffect(() => {

    let s = 1000;
    if (count == 5){
      s= 5000
    }

    function myFunction(){
        if (count === 5){
          setSteady([]);
          setContinu(false);
          setReady(false);
          setStartTime(true);
        }else {
          setCount(count + 1);
          setSteady(steady => [...steady, count+1])
        }
        console.log(count)
        console.log(steady)

    }

    function start(){
      setMilSecond1(milSecond1 + 1);
      if (milSecond1 == 9){
          setMilSecond1(0)
          setMilSecond2(milSecond2 + 1);
      }
      if (milSecond2 == 9){
        setMilSecond2(0)
        setSecond(second + 1);
      }
    }

    if (starts){
      if (continu){
        if (ready){
          let a = setInterval(myFunction, s);
          return () => clearInterval(a)
        }
      }
    }


    if (startTime){
      let c = setInterval(start, 0.1);
      return () => clearInterval(c);
    }

    
 console.log("r")
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter"){
        setStarts(true)
      }
    })
  }, [count,ready, continu, steady, starts,startTime, second, milSecond1, milSecond2])
  return (
  <>

  <div className="background">
    <Header>
      {/* <h2>
        Starting grid React
      </h2>
      <h3 className={starts? "red":" "}>Enter = Play</h3> */}
      <img id="logo" src="./images/new-f1-logo-2018.png" width="80%" height="130px"/>
    </Header>
    <div className="container">
      <Bar/>
     <Board>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Color={steady[0]} Start = {continu} Padam = {ready}/>
       <Lights Color={steady[0]} Start = {continu} Padam = {ready}/>
     </Board>

     <Board>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Color={steady[1]} Start = {continu} Padam = {ready}/>
       <Lights Color={steady[1]} Start = {continu} Padam = {ready}/>
     </Board>

     <Board>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Color={steady[2]} Start = {continu} Padam = {ready}/>
       <Lights Color={steady[2]} Start = {continu} Padam = {ready}/>
     </Board>
     
     <Board>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Color={steady[3]} Start = {continu} Padam = {ready}/>
       <Lights Color={steady[3]} Start = {continu} Padam = {ready}/>
     </Board>
     
     <Board>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Start = {continu} Padam = {ready}/>
       <Lights Color={steady[4]} Start = {continu} Padam = {ready}/>
       <Lights Color={steady[4]} Start = {continu} Padam = {ready}/>
     </Board>
    </div>
  <div className="timing">
    <Time Start = {startTime}>
        {second}<span>s</span>.{milSecond2}{milSecond1}
    </Time>
    <Button
        e={()=>{setStartTime(false)} } start = {startTime}
    />
 </div>
  </div>  
  </>
  );
}

export default App;
