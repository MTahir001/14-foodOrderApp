import { useContext } from "react";
import logoImg from "./../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalCartItems = cartCtx.items.reduce(
    (acc, ele) => acc + ele.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="FoodBlast logo" />
        <h1>FoodBlast</h1>
      </div>
      <div>
        <nav>
          <Button onClick={handleShowCart} textOnly>
            Cart({totalCartItems})
          </Button>
        </nav>
      </div>
    </header>
  );
}
