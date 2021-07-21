const Button = (props) => {
  return (
    <div>
      <div className={props.design}>
        <button onClick={props.handleClick}>{props.sign}</button>
      </div>
    </div>
  );
};

export default Button;
