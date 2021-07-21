const Button = (props) => {
  return (
    <div>
      <div className="counterMore">
        <button
          onClick={() => {
            props.setCounter(props.counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="counterLess">
        <button
          onClick={() => {
            props.setCounter(props.counter - 1);
          }}
        >
          -
        </button>
      </div>
      <div className="counterReset">
        <button
          onClick={() => {
            props.setCounter(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Button;
