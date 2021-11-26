import Header from "./components/Header";
import Summaries from "./components/Summary";
import Orders from "./components/Order";
import Divider from "components/Divider";
import LargeButton from "components/LargeButton";

const Cart = () => {
  return (
    <div>
      <Header />
      <Divider fullwidth />
      <Orders />
      <Summaries />
      <LargeButton onClick={() => alert("Enjoy with your meal ^^!!")}>
        Begin Checkout
      </LargeButton>
    </div>
  );
};

export default Cart;
