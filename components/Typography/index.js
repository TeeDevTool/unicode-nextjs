import colors from "styles/scss/_themes-vars.module.scss";

const { black, grey, red } = colors;

const textType = {
  header: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    color: grey,
  },
  title1: {
    fontFamily: "'Source Serif Pro', serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    color: black,
  },
  title2: {
    fontSize: 20,
    fontWeight: 600,
    color: black,
  },
  menu: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 15,
    color: black,
  },
  submenu1: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    color: grey,
  },
  submenu2: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    textDecoration: "underline",
    color: red,
  },
  submenu3: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    color: black,
  },
  back: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    color: red,
  },
  bill1: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    color: black,
  },
  bill2: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    color: grey,
  },
  total: {
    ontStyle: "normal",
    fontWeight: 600,
    fontSize: 18,
    color: black,
  },
};

const Typography = (props) => {
  const { type, children, extraText } = props;

  if (extraText) {
    const splitText = children.split("?");
    const styles = { ...textType[type], display: "inline-block" };
    return (
      <>
        {splitText.map((row, index) => {
          const { type: getExtraType, text: getExtraText } = extraText[index];
          const extraStyles = {
            ...textType[getExtraType],
            display: "inline-block",
            margin: "0px 3px",
          };

          return (
            <div key={index}>
              {" "}
              <div style={styles}>{row}</div>
              <div style={extraStyles}>{getExtraText}</div>
            </div>
          );
        })}
      </>
    );
  }

  return <div style={textType[type]}>{children}</div>;
};

export default Typography;
