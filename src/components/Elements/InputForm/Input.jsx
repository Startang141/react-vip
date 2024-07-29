import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="w-full border block rounded-md p-2 mt-2 placeholder:text-sm"
      name={name}
      placeholder={placeholder}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
