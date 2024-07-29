import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} labelText={label} />
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
