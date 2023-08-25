
import {useEffect, useState} from "react"; 

export default function App() {
  const[advice, setAdvice] = useState("");
  const[count, setCount] = useState(0);
  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    //console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(c=> c + 1); 
  }

  useEffect(function(){
    getAdvice();
  },[])
  return (
    <div>
      <h1>Advice On-line</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}> Get Advice </button>
      <Message count={count}/>
    </div>
  );
}

function Message(props){
  return(
    <p>You have read <strong>{props.count}</strong> piece(s) of advice.</p>
  );
}