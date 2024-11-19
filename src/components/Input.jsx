const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className="border border-2 rounded-md border-sky-500 w-80"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
