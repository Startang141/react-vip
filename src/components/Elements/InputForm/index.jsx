import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} labelText={label} />
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;