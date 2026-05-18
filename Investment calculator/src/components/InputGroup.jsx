export default function InputGroup({
  labelContent,
  inputValue,
  onInputChange,
  ...props
}) {
  return (
    <div {...props}>
      <label>{labelContent}</label>
      <input defaultValue={inputValue} onChange={onInputChange}></input>
    </div>
  );
}
