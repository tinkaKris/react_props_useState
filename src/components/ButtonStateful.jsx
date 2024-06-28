import { useState } from "react";

const ButtonStateful = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Мінус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default ButtonStateful;
