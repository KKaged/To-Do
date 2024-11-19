const Button = ({ onButtonClick }) => {
  return (
    <button className="w-48 bg-sky-500" onClick={onButtonClick}>
      Add Task
    </button>
  );
};

export default Button;
