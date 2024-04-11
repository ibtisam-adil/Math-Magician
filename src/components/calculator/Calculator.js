import { useState } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    setObj(calculate(obj, btnName));
  };

  const display = () => {
    const { total, next, operation } = obj;
    if (operation && !next) {
      return `${total || ''} ${operation}`;
    }
    if (next && operation) {
      return `${total || ''} ${operation} ${next}`;
    }
    return next || total || '0';
  };
  return (
    <div className="hero-wrapper">
      <div className="heading">
        <h2>Time to Crunch Some Numbers!</h2>
      </div>
      <div className="hero">
        <div className="standard">
          <i className="bx bx-menu-alt-left" />
          <p>Standard</p>
        </div>
        <div className="display">
          <p className="result">{display()}</p>
        </div>
        <div className="row">
          <Button btnName="AC" clickEvent={handleClick} />
          <Button btnName="+/-" clickEvent={handleClick} />
          <Button btnName="%" clickEvent={handleClick} />
          <Button btnName="÷" clickEvent={handleClick} />
        </div>
        <div className="row">
          <Button btnName="7" clickEvent={handleClick} />
          <Button btnName="8" clickEvent={handleClick} />
          <Button btnName="9" clickEvent={handleClick} />
          <Button btnName="x" clickEvent={handleClick} />
        </div>
        <div className="row">
          <Button btnName="4" clickEvent={handleClick} />
          <Button btnName="5" clickEvent={handleClick} />
          <Button btnName="6" clickEvent={handleClick} />
          <Button btnName="-" clickEvent={handleClick} />
        </div>
        <div className="row">
          <Button btnName="1" clickEvent={handleClick} />
          <Button btnName="2" clickEvent={handleClick} />
          <Button btnName="3" clickEvent={handleClick} />
          <Button btnName="+" clickEvent={handleClick} />
        </div>
        <div className="row">
          <Button btnName="0" clickEvent={handleClick} />
          <Button btnName="." clickEvent={handleClick} />
          <Button btnName="=" clickEvent={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
