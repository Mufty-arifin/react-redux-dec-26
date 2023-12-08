import React from 'react';
import MainComponents from '../components/about/main';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../reducer/counterSlice';
const About = () => {
  const dispatch = useDispatch();
  return (
    <>
      <MainComponents />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default About;
