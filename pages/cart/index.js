import { Header, Order, Summary } from "./components";
import Divider from "components/Divider";
import LargeButton from "components/LargeButton";

const Cart = () => {
  return (
    <div>
      <Header />
      <Divider fullwidth />
      <Order />
      <Summary />
      <LargeButton onClick={() => alert("Enjoy with your meal ^^!!")}>
        Begin Checkout
      </LargeButton>
    </div>
  );
};

export default Cart;
