import React from 'react';
import { useState } from 'react';
import './style.css';
import Input from './Input';
import Counter from './Counter';

export default function App() {
  const counterList = {
    1: {
      sum: 0,
      items: [],
    },
    2: {
      sum: 0,
      items: [],
    },
    3: {
      sum: 0,
      items: [],
    },
  };
  const [counter, setCounter] = useState(counterList);
  const findMin = () => {
    let min = Number.MAX_VALUE;
    let new_item;
    for (let i of Object.keys(counter)) {
      if (counter[i].sum < min) {
        min = counter[i].sum;
        new_item = i;
      }
    }
    return new_item;
  };
  const handleSubmit = (items) => {
    if (!items) {
      return;
    }
    const findMinItemCounter = findMin(counter);
    const newVal = {
      ...counter,
      [findMinItemCounter]: {
        sum: counter[findMinItemCounter].sum + parseInt(items, 10),
        items: [...counter[findMinItemCounter].items, parseInt(items, 10)],
      },
    };
    setCounter(newVal);
  };
  return (
    <div>
      <Input onSubmit={handleSubmit} />
      <Counter counter={counter} />
    </div>
  );
}
