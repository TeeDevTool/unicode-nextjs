import Typography from "components/Typography";
import useAction from "hooks/useAction";

import { widthLayout } from "config/static";
import colors from "styles/scss/_themes-vars.module.scss";

const OrderTitle = ({ goToPath }) => (
  <>
    <Typography type="title2">Your Order</Typography>
    <div onClick={() => goToPath("/")} style={{ display: "inline-block" }}>
      <Typography type="back">Add items +</Typography>
    </div>
  </>
);

const Order = ({ menu, description, valueAdd, price }) => {
  const totalPrice = (price * valueAdd).toFixed(2);

  return (
    <>
      <div
        style={{
          width: widthLayout,
          paddingBottom: 15,
          marginBottom: 20,
          borderBottom: "0.5px solid rgba(126, 131, 137, 0.2)",
        }}
        className="grid"
      >
        <Count value={valueAdd} />
        <div style={{ display: "inline-block", width: "100%", marginLeft: 8 }}>
          <Typography type="menu">{menu}</Typography>
          <Typography type="submenu1">{description}</Typography>
        </div>
        <Typography type="bill1">{`$${totalPrice}`}</Typography>
      </div>
    </>
  );
};

const Count = ({ value }) => {
  const { red, paper } = colors;
  return (
    <div
      style={{
        width: 18,
        height: 18,
        marginTop: -12,
        borderRadius: "3px",
        backgroundColor: red,
        color: paper,
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 15,
      }}
    >
      {value}
    </div>
  );
};

const Orders = () => {
  const [data, , , , goToPath] = useAction();

  return (
    <>
      <div className="grid" style={{ padding: "35px 0px" }}>
        <OrderTitle goToPath={goToPath} />
      </div>
      {data.map((row, index) => {
        if (row.added) {
          return <Order key={index} {...row} />;
        }
      })}
    </>
  );
};

export default Orders;
