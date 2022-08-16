import './index.css';

const Button = ({children, onClick}) => {
    const handleClick = (e) => {
        onClick(e)
    }
    
    return(
        <button onClick={handleClick} className="mainBtn">{children}</button>
    )
};

export default Button;
