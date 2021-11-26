import Image from "next/image";
import Timer from "components/Timer";
import Typography from "components/Typography";

import useAction from "hooks/useAction";
import colors from "styles/scss/_themes-vars.module.scss";

const SummaryTitle = () => {
  const { red, container } = colors;
  return (
    <>
      <div className="grid">
        <div
          style={{
            marginBottom: -20,
            paddingBottom: 4,
            borderBottom: `3px solid ${red}`,
          }}
        >
          <Typography type="title2">Summary</Typography>
        </div>
        <Timer />
      </div>
      <div
        style={{
          padding: "13px 15px",
          backgroundColor: container,
          alignContent: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Image src="/image/take-home.png" alt="trivia" width={22} height={22} />
        <div
          style={{
            display: "inline-block",
            paddingLeft: 10,
          }}
        >
          <Typography type="bill1">
            Earn credits by playing trivia after checkout!
          </Typography>
        </div>
      </div>
    </>
  );
};

const Sumary = ({ title, price }) => (
  <div
    className="grid"
    style={{
      padding: "10px 0px",
      borderBottom: "0.5px solid rgba(126, 131, 137, 0.2)",
    }}
  >
    <Typography type="bill2">{title}</Typography>
    <Typography type="bill2">{price}</Typography>
  </div>
);

const SummaryWrapper = ({ data }) => {
  return (
    <div style={{ padding: "10px 0px" }}>
      {data.map((row, index) => (
        <Sumary {...row} key={index} />
      ))}
    </div>
  );
};

const Total = ({ totalPrice }) => (
  <div className="grid" style={{ padding: "10px 0px 40px" }}>
    <Typography type="total">Total</Typography>
    <Typography type="total">{`$${totalPrice}`}</Typography>
  </div>
);

const Summaries = () => {
  const [, , totalPrice, showSummary] = useAction();

  const fakeSummary = [
    {
      title: "Subtotal",
      price: `$${totalPrice}`,
    },
    {
      title: "Delivery Fee",
      price: `$1.99`,
    },
    {
      title: "Taxes",
      price: `$1.48`,
    },
  ];

  const total = (parseFloat(totalPrice) + 1.99 + 1.48).toFixed(2);

  if (showSummary) {
    return (
      <div style={{ padding: "15px 0px 40px" }}>
        <SummaryTitle />
        <SummaryWrapper data={fakeSummary} />
        <Total totalPrice={total}></Total>
      </div>
    );
  }
  return null;
};

export default Summaries;
