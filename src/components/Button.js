const Button = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.handleClick} className={props.design}>
          {props.sign}
        </button>
      </div>
    </div>
  );
};

export default Button;
