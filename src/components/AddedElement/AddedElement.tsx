import "./AddedElement.css"

interface Props {
  name: string;
  count: number;
  price: number;
  onDeleteItem: React.MouseEventHandler;
}

const AddedElement: React.FC<Props> = ({ name, count, onDeleteItem, price }) => {
  return (
    <div>
      <p className="orderItem"><span className="orderItemName">{name}</span>
        <span className="orderItemCount"> x {count} </span>
        <span className="orderItemPrice">{price} KGS</span>
        <button className="deleteBtn" type="button" onClick={onDeleteItem}></button>
      </p>
    </div>
  );
};

export default AddedElement;