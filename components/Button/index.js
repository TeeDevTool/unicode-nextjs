import { useState, useContext } from "react";
import Image from "next/image";

// theme colors
import colors from "styles/scss/_themes-vars.module.scss";

import { Context } from "context";
import { handleAdd, handleClear } from "config/action";
import { add, clear, mouseOver, mouseOut } from "config/static";

const Button = (props) => {
  const { dispatch } = useContext(Context);
  const { paper, red, redHover, redLight, redLightHover, redDark } = colors;
  const { children: text, added, value, index } = props;

  const [hover, setHover] = useState({ add: false, clear: false });

  const setHoverState = (hoverKey, state) => {
    setHover((getHoverState) => ({
      ...getHoverState,
      [hoverKey]: state,
    }));
  };

  return (
    <div>
      {added && (
        <button
          onMouseOver={() => setHoverState(clear, mouseOver)}
          onMouseOut={() => setHoverState(clear, mouseOut)}
          onClick={() =>
            dispatch({
              type: handleClear,
              payload: {
                index,
              },
            })
          }
          style={{
            backgroundColor: hover.clear ? redLightHover : redLight,
            color: redDark,
            padding: "11px 3px 11px 6px",
            borderRadius: "10px 0px 0px 10px",
            border: "none",
            textAlign: "center",
            alignItems: "center",
            maxHeight: 38,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              marginRight: 3,
              color: "white",
              display: "inline-block",
            }}
          >
            <Image
              src="/icons/cancel.svg"
              alt="cancel"
              width={14}
              height={14}
            />
          </div>
        </button>
      )}
      <button
        onMouseOver={() => setHoverState(add, mouseOver)}
        onMouseOut={() => setHoverState(add, mouseOut)}
        onClick={() =>
          dispatch({
            type: handleAdd,
            payload: {
              index,
              value,
            },
          })
        }
        style={{
          backgroundColor: added
            ? hover.add
              ? redLightHover
              : redLight
            : hover.add
            ? redHover
            : red,
          color: added ? redDark : paper,
          padding: added ? "10px 6px 10px 1px" : "10px 12px",
          borderRadius: added ? "0px 10px 10px 0px" : "10px",
          marginLeft: added ? -2 : 0,
          border: "none",
          fontSize: "15px",
          fontWeight: "bold",
          letterSpacing: "-0.08px",
          textAlign: "center",
          alignItems: "center",
          maxHeight: 38,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
