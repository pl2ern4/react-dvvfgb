import React from 'react';
import './style.css';

export default function Counter({ counter }) {
  return (
    <div className="counter">
      {Object.keys(counter).map((o, i) => (
        <div className="counter---list" key={`index_${i}`}>
          Counter: {o}
          <div>
            {counter[o].items.map((it, key) => (
              <div className="item" key={`item_${key}`}>
                Item: {it}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
