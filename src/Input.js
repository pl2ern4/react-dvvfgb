import React from 'react';
import './style.css';

export default function Input({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.item.value;
    val && onSubmit(val);
    e.target.reset();
  };
  return (
    <div class="input">
      <form method="GET" onSubmit={handleSubmit}>
        <input type="number" name="item" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
