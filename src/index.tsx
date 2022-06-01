import './style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App:React.FC = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <div>
        <span>count: </span>
        <span>{count}</span>
      </div>
      <button onClick={() => setCount(s => s + 1)}>+</button>
      <button onClick={() => setCount(0)}>C</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
