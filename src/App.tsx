import './App.css';
import hamburgerImage from './assets/burger.jpg';
import cheeseburgerImage from './assets/cheeseburger.jpg';
import friesImage from './assets/fries.jpg';
import coffeeImage from './assets/coffee.jpg';
import teaImage from './assets/tea.jpg';
import colaImage from './assets/cola.jpg';
import Item from './components/Item/Item.tsx';

interface IItems {
  name: string;
  price: number;
  image: string;
}

const App = () => {
  const items: IItems[] = [
    {name: 'Hamburger', price: 80, image: hamburgerImage},
    {name: 'Cheeseburger', price: 90, image: cheeseburgerImage},
    {name: 'Fries', price: 45, image: friesImage},
    {name: 'Coffee', price: 70, image: coffeeImage},
    {name: 'Tea', price: 50, image: teaImage},
    {name: 'Cola', price: 40, image: colaImage}
  ];

  const addItem = () => {
  }

  return (
    <div className="mainContainer">
      <div className="container">
        <h3 className='title'>Add Items</h3>
        <div className="items">
          {items.map((item, index) => (
            <Item key={index + 1}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  onAddItem={addItem}/>
          ))
          }
        </div>
      </div>

      <div className="container">
        <h3 className="title">Order Details</h3>
        <div className="orderDetails">

        </div>
        <p>Total Price: <strong></strong></p>
      </div>
    </div>
  );
};

export default App;

