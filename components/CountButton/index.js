import { useState, useContext } from "react";

// theme colors
import colors from "styles/scss/_themes-vars.module.scss";

import { Context } from "context";
import { handleCounter } from "config/action";
import { increment, decrement, mouseOut, mouseOver } from "config/static";

const CountButton = (props) => {
  const { container, containerHover, black, grey } = colors;
  const { value, index } = props;
  const { dispatch } = useContext(Context);
  const [hover, setHover] = useState({ increment: false, decrement: false });

  const setHoverState = (hoverKey, state) => {
    setHover((getHoverState) => ({
      ...getHoverState,
      [hoverKey]: state,
    }));
  };

  return (
    <div>
      <button
        onMouseOver={() => setHoverState(decrement, mouseOver)}
        onMouseOut={() => setHoverState(decrement, mouseOut)}
        onClick={() =>
          dispatch({
            type: handleCounter,
            payload: {
              index,
              type: decrement,
            },
          })
        }
        disabled={value === 1}
        style={{
          backgroundColor: hover.decrement ? containerHover : container,
          color: grey,
          borderRadius: "10px 0px 0px 10px",
          padding: "3px 10px",
          marginRight: -2,
          border: "none",
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: "normal",
          letterSpacing: "-0.08px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        -
      </button>
      <button
        style={{
          backgroundColor: container,
          color: black,
          padding: "4px 6px",
          border: "none",
          fontSize: "15px",
          fontWeight: "bold",
          letterSpacing: "-0.08px",
          textAlign: "center",
          alignItems: "center",
        }}
        disabled
      >
        {value}
      </button>
      <button
        onMouseOver={() => setHoverState(increment, mouseOver)}
        onMouseOut={() => setHoverState(increment, mouseOut)}
        onClick={() =>
          dispatch({
            type: handleCounter,
            payload: {
              index,
              type: increment,
            },
          })
        }
        style={{
          backgroundColor: hover.increment ? containerHover : container,
          color: grey,
          borderRadius: "0px 10px 10px 0px",
          padding: "3px 10px",
          marginLeft: -2,
          border: "none",
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: "normal",
          letterSpacing: "-0.08px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        +
      </button>
    </div>
  );
};

export default CountButton;
