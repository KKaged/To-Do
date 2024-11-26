const Button = ({ onButtonClick, text }) => {
  return (
    <button className="w-48 bg-sky-500" onClick={onButtonClick}>
      {text}
    </button>
  );
};

export default Button;
