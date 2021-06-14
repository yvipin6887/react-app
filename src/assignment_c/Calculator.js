import {useState} from 'react'
import * as math from 'mathjs'
import Button from './Button'
import Input from './Input'
const Calculator=()=>{
    const [text,setText]=useState("");
    const [result,setResult]=useState("")
    const addToText=(val)=>{
        setText((text)=>[...text,val+" "]);;
    }
    const resetInput=()=>{
      setText("")
      setResult("")
    }
    const calculateResult=()=>{
      const input=text.join("");
      setResult(math.evaluate(input))
    }
    return (
        <div className="App">
           <div className="cal-wrapper">
               <Input text={text} result={result}/>
              <div className="row">
                <Button symbol="7" color="" handleClick={addToText}/>
                <Button symbol="8" handleClick={addToText}/>
                <Button symbol="9" handleClick={addToText}/>
                <Button symbol="/" handleClick={addToText}/>
              </div>
              <div className="row">
                <Button symbol="4" handleClick={addToText}/>
                <Button symbol="5" handleClick={addToText}/>
                <Button symbol="6" handleClick={addToText}/>
                <Button symbol="*" handleClick={addToText}/>
              </div>
              <div className="row">
                <Button symbol="1" handleClick={addToText}/>
                <Button symbol="2" handleClick={addToText}/>
                <Button symbol="3" handleClick={addToText}/>
                <Button symbol="+" handleClick={addToText}/>
              </div>
              <div className="row">
                <Button symbol="0" handleClick={addToText}/>
                <Button symbol="." handleClick={addToText}/>
                <Button symbol="=" handleClick={calculateResult}/>
                <Button symbol="-" handleClick={addToText}/>
              </div>
              <Button symbol="Clear" color="red" handleClick={resetInput}/>
           </div>
        </div>
      );
}
export default Calculator;