
import './Button.css'
const Button=({symbol,color,handleClick})=>{
    return (
        <button 
        onClick={() => handleClick(symbol)}
        className="button-wrapper" style={{backgroundColor:color}}>{symbol}</button>
    );
}

export default Button