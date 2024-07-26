const Button = (props) => {
  const {
    classname = "bg-black",
    text = "Button",
    type = "Button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
