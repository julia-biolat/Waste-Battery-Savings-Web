import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label> {label} </label>
      <input {...inputProps} onChange={onChange} />
      {/*<input {...inputProps} onChange={onChange} required /> 라고 변형하면 경고 보임*/}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
