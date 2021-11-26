// external modules
import { memo } from "react";
import Head from "next/head";

// internal modules
import Button from "components/Button";
import CountButton from "components/CountButton";
import LargeButton from "components/LargeButton";
import ImageMenu from "components/Image";
import Margin from "components/Margin";
import Timer from "components/Timer";
import Typography from "components/Typography";

import useAction from "hooks/useAction";

const Header = () => {
  return (
    <>
      <div className="grid">
        <div className="grid-left">
          <Typography type="title1">Express Items</Typography>
          <Margin space={6} />
          <Typography
            type="submenu1"
            extraText={[
              { text: "Katsuei", type: "submenu2" },
              { text: "10:00pm", type: "submenu3" },
            ]}
          >
            Order up to 8 of these items from ? and recieve your order by
          </Typography>
        </div>
        <Timer />
      </div>
      <Margin space={25} />
    </>
  );
};

const Menu = memo(
  ({ description, menu, price, image, added, valueAdd, ...other }) => {
    return (
      <>
        <div className="grid">
          <div className="grid grid-left">
            <ImageMenu name={menu} url={image} />
            <div className="menu-detail">
              <Typography type="menu">{menu}</Typography>
              <Margin space={5} />
              <Typography type="submenu1">{description}</Typography>
              <Margin space={5} />
              <CountButton {...other} />
            </div>
          </div>
          <Button price={price} added={added} {...other}>
            {added ? `Added ${valueAdd}` : `Add ${price}`}
          </Button>
        </div>
        <Margin space={30} />
      </>
    );
  }
);

const IndexPage = () => {
  const [data, total, totalPrice, showButton, goToPath] = useAction();

  return (
    <div>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {data.map((row, index) => (
        <Menu key={index} index={index} {...row} />
      ))}
      {showButton && (
        <LargeButton
          icon
          total={total}
          onClick={() => goToPath("/cart")}
        >{`View Cart - $${totalPrice}`}</LargeButton>
      )}
    </div>
  );
};

export default IndexPage;
