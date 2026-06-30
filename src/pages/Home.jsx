// import React from 'react'

import Car from "../components/Car";
import Navbar from "../components/Navbar"

const Home = () => {

const x = 5;


  return (
      <>
      <Navbar/>
      <div>Home</div>
      <h1>{(x) < 10 ? "Apple" : "Banana"}</h1>
      <Car color="red"/>
      </>   
  )
}
  

export default Home