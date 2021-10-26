import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Lights from './components/Lights';
import Time from './components/Time';
import { useState,useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [steady, setSteady] = useState([]);
  const [continu, setContinu] = useState(true);
  const [starts,setStarts] = useState(false);

  useEffect(() => {

    let second = 1000;
    function myFunction(){
        if (count === 5){
          setSteady([]);
          setContinu(false);
        }else {
          setCount(count + 1);
          setSteady(steady => [...steady, count+1])
        }
        console.log(count)
        console.log(steady)

    }
    if (count == 5){
        second = 5000
    }
    if (starts){
      if (continu){
        let a = setInterval(myFunction, second);
        return () => clearInterval(a)
      }else {
        console.log("green go");
      }
    }
    
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter"){
        setStarts(true)
      }else {
        alert("press enter")
      }
    })
  }, [count, continu, steady, starts])
  return (
  <>
  <div className="background">
    <Header>
      <h2>
        Starting grid React
      </h2>
      <h3 className={starts? "red":" "}>Enter = Play</h3>
    </Header>
    <div className="container">
     <Board>
       <Lights Start = {continu}/>
       <Lights Color={steady[0]} Start = {continu}/>
       <Lights Color={steady[0]} Start = {continu}/>
     </Board>

     <Board>
       <Lights Start = {continu}/>
       <Lights Color={steady[1]} Start = {continu}/>
       <Lights Color={steady[1]} Start = {continu}/>
     </Board>

     <Board>
       <Lights Start = {continu}/>
       <Lights Color={steady[2]} Start = {continu}/>
       <Lights Color={steady[2]} Start = {continu}/>
     </Board>
     
     <Board>
       <Lights Start = {continu}/>
       <Lights Color={steady[3]} Start = {continu}/>
       <Lights Color={steady[3]} Start = {continu}/>
     </Board>
     
     <Board>
       <Lights Start = {continu}/>
       <Lights Color={steady[4]} Start = {continu}/>
       <Lights Color={steady[4]} Start = {continu}/>
     </Board>
    </div>
    <Time S = {continu}/>
  </div>  
  </>
  );
}

export default App;
