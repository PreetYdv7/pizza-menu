import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numberOfPizzas = pizzas.length;
  return (
    <div>
      <main className="menu">
        <h2>Our Menu</h2>

        {numberOfPizzas > 0 ? (
          <>
            <p>
              {" "}
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from stone oven, all organic, all delicious.{" "}
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're currently out of stock. lease come back later.</p>
        )}
      </main>
    </div>
  );
};
const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <li>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold out" : `$${pizzaObj.price}`}</span>
      </li>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const open = 12;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;
  console.log(isOpen);

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {open}:00 and {closed}:00
      </p>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closed={closed} open={open} />
      ) : (
        <p>
          We're happy to welcome you between {open}:00 and {closed}:00
        </p>
      )}
    </footer>
  );
};

const Order = ({ closed, open }) => {
  return (
    <div className="order">
      <p>
        We're open from {open}:00 to {closed}:00. Visit or order online.{" "}
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
