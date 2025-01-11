import "./Item.css";

interface Props {
  name: string;
  image: string;
  price: number;
  onAddItem: React.MouseEventHandler;
}

const Item: React.FC<Props> = ({ name, image, price, onAddItem }) => {
  return (
    <button
      type="button"
      className="itemBtn"
      onClick={onAddItem}>
      <img className="itemImage"
           src={image} alt={name}/>
      <span className="itemName"> {name} <span className="itemPrice">Price: {price}</span></span>

    </button>
  );
};

export default Item;