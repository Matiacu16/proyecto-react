import './Button.css'

function Button( {text, type} ) {
    const btnstyle = {
        backgroundcolor: type === "alert" ? "blue" : "green",
    };
return (
    <button style={btnstyle} className="btn btn-dark">{text}</button>
);
}

export default Button