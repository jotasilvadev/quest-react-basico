import './button.css'

const Button = (props) => {
    const click = () => {
        alert(`A label desse botão é: ${props.label}`);
    };

    return (
        <button className="btn" onClick={click}>
            {props.label}
        </button>
    );
};

Button.defaultProps = {
    label: "Capivara DevQuester",
};

export default Button;
