import logoImg from "./../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="FoodBlast logo" />
        <h1>FoodBlast</h1>
      </div>
      <div>
        <nav>
          <button>Cart(0)</button>
        </nav>
      </div>
    </header>
  );
}
