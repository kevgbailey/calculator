import {useState} from 'react';
import NumButton from './NumButton';
const Display = () => {
    const [displayValue, setDisplayValue] = useState('');
    const [operator, setOperator] = useState('');
    const [num1, setNum1] = useState(0);
    const [numCheck, setNumCheck] = useState(0);
    const [hasDecimalPoint, setHasDecimalPoint] = useState(false);
  
    function handleClick(newValue) {
    setDisplayValue(displayValue + newValue);
  }
  
    const handleAdd = () => {
      setNum1(Number(displayValue));
      setOperator('+');
      setNumCheck(1);
      setDisplayValue('');
      setHasDecimalPoint(false);

    }
    const handleSubtract = () => {
      setNum1(Number(displayValue));
      setOperator('-');
      setNumCheck(1);
      setDisplayValue('');
      setHasDecimalPoint(false);
    }
    const handleMultiply = () => {
      setNum1(Number(displayValue));
      setOperator('x');
      setNumCheck(1);
      setDisplayValue('');
      setHasDecimalPoint(false);

    }
    const handleDivide = () => {
      setNum1(Number(displayValue));
      setOperator('%');
      setNumCheck(1);
      setDisplayValue('');
      setHasDecimalPoint(false);

    }
    const handleEquals = () => {
      const num2 = Number(displayValue);
      if (operator === '+'){
        setDisplayValue( num1 + num2 );
      }
      else if(operator === '-'){
        setDisplayValue(num1 -num2);
      }
      else if(operator === 'x'){
        setDisplayValue(num1 * num2);
      }
      else if(operator === '%'){
        setDisplayValue(num1 / num2);
      }
    }

    function handleDecimal(){
     if(hasDecimalPoint === false){
      handleClick('.');
      setHasDecimalPoint(true);
     }
    }

    function handleClear(){
      setDisplayValue('');
      setHasDecimalPoint(false);
    }

    return ( 
      <div>
       <div className = "mainDisplay">
        <h1>{displayValue}</h1>
        </div>

<div className = 'buttons'>
    <NumButton value = {7} onClick = {() => handleClick(7)}/>
    <NumButton value = {8} onClick = {() => handleClick(8)}/>
    <NumButton value = {9} onClick = {() => handleClick(9)}/>
    <NumButton value = {'+'} onClick = {() => handleAdd()}/>
    <NumButton value = {4} onClick = {() => handleClick(4)}/>
    <NumButton value = {5} onClick = {() => handleClick(5)}/>
    <NumButton value = {6} onClick = {() => handleClick(6)}/>
    <NumButton value = {'-'} onClick = {() => handleSubtract()}/>
    <NumButton value = {1} onClick = {() => handleClick(1)}/>
    <NumButton value = {2} onClick = {() => handleClick(2)}/>
    <NumButton value = {3} onClick = {() => handleClick(3)}/>
    <NumButton value = {'x'} onClick = {() => handleMultiply()}/>
    <NumButton value = {0} onClick = {() => handleClick(0)}/>
    <NumButton value = {'.'} onClick = {() => handleDecimal()}/>
    <NumButton value = {'C'} onClick = {() => handleClear()}/>
    <NumButton value = {'%'} onClick = {() => handleDivide()}/>
    <NumButton value = {'='} onClick = {() => handleEquals()}/>
  
  
       </div>
       </div>
     );
}
 
export default Display;