import './InputRange';

const InputRange = (props) => {
  const min = props.min ? props.min : 0;
  const max = props.max ? props.max : 100;
  
  return (
    <div className="form_input-range">
      <label htmlFor={props.id}>{props.label} ({props.value})</label>
      <input {...props}
        id={props.id}
        name={props.id}
        type="range"
        min={min}
        max={max}
      />
    </div>
  )
}

export default InputRange;