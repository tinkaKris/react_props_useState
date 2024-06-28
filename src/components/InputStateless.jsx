export default function InputStateless(props) {
  return (
    <div className="form-group">
      <label>{props.text}</label>
      <input {...props}></input>
    </div>
  );
}
