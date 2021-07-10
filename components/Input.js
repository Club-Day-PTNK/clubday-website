import inputStyles from "../styles/Input.module.scss";
const Input = ({ label, name }) => {
  return (
    <div className={inputStyles.container}>
      <label className={inputStyles.inputContainer}>
        <span className={inputStyles.inputLabel}>{label}</span>
        <input className={inputStyles.input} type="text" name={name}></input>
      </label>
    </div>
  );
};
export default Input;
