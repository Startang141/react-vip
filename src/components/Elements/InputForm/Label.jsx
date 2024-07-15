const Label = (props) => {
  const { htmlFor, labelText } = props;
  return (
    <label htmlFor={htmlFor} className="font-semibold text-slate-800">
      {labelText}
    </label>
  );
};

export default Label;
