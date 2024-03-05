import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";

export default function Checkout() {
  const cartTotal = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Modal>
      <form>
        <h2>Checkout Page</h2>
        <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
      </form>
    </Modal>
  );
}
