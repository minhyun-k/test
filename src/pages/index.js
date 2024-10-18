// import Error from "next/error";

import { useState } from "react";
import Error from "./_error";
import ApiTest from "./ApiTest";


export default function Home() {

  const [test, setTest] = useState(1000);
  const [error,setError] = useState()

  function err(){
    fetch('http://aaaa.com')
    .catch((e)=>{
      setError(e)
    })
  }


  if(error) return <Error statusCode={Error}/>

  return (
    <>
      <Error/>
      main page...<br/>
      {test}<br/>
      <img src="img-spot.png" onClick={()=>setTest(10000)}/>

      <hr style={{margin:'50px 0'}}/>
      <h2> API </h2>
      <ApiTest/>
    </>
  );
}
