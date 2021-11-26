import { useState } from "react";
import Image from "next/image";

// colors
import colors from "styles/scss/_themes-vars.module.scss";

import { mouseOut, mouseOver } from "config/static";

const LargeButton = (props) => {
  const { icon, total, children, ...other } = props;
  const { red, redHover, paper } = colors;
  const [hover, setHover] = useState(false);

  return (
    <button
      {...other}
      onMouseOver={() => setHover(mouseOver)}
      onMouseOut={() => setHover(mouseOut)}
      style={{
        padding: 20,
        width: "100%",
        border: "none",
        borderRadius: 10,
        backgroundColor: hover ? redHover : red,
        color: paper,
        textAlign: "center",
        alignItems: "center",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        filter: icon ? "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" : "none",
      }}
    >
      {children}
      {icon && (
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: 30,
            height: 30,
            marginLeft: 4,
          }}
        >
          <Image
            className="cart"
            src="/icons/cart.svg"
            alt="cart"
            width={28}
            height={20}
          />
          <div
            style={{
              top: -4,
              right: -4,
              width: 14,
              height: 14,
              padding: 0,
              alignContent: "center",
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: paper,
              color: red,
              fontSize: 9,
            }}
          >
            <div style={{ paddingTop: 1, textAlign: "center" }}>{total}</div>
          </div>
        </div>
      )}
    </button>
  );
};

export default LargeButton;
