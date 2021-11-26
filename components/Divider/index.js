import { paddingLayout, widthLayout } from "config/static";

const Divider = ({ fullwidth }) => (
  <div
    style={{
      marginLeft: fullwidth ? -paddingLayout : 0,
      width: fullwidth ? paddingLayout * 2 + widthLayout : "100%",
      borderBottom: "0.5px solid rgba(126, 131, 137, 0.2)",
    }}
  />
);

export default Divider;
