import logoImg from "./../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="FoodBlast logo" />
        <h1>FoodBlast</h1>
      </div>
      <div>
        <nav>
          <Button textOnly>Cart(0)</Button>
        </nav>
      </div>
    </header>
  );
}
