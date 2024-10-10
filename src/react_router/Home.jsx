import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate =useNavigate();
  const handleClick=()=>{
      navigate('./about')
  }
  return (
    <div>
      Home
      <button onClick={handleClick}>move to about page</button>
    </div>
  );
};

export default Home;
