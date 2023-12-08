import React from 'react';
import ComponentsTwo from '../components/home/componentsTwo';
import { useState } from 'react';
import Local from '../components/home/local';
import { useSelector } from 'react-redux';
const Home = () => {
  const [count, setCount] = useState(0);
  // dapatkan state dari store
  const counter = useSelector((state) => state.counter.value);
  return (
    <>
      <ComponentsTwo count={count} setCount={setCount} />
      <Local/>
      <div>
        <h1>Ini Contoh Action dan reduser</h1>
        <h6>{counter}</h6>
      </div>
      </>
    
  );
};

export default Home;
