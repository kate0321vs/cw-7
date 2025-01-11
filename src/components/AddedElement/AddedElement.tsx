interface Props {
  name: string;
  count: number;
  price: number;
  onDeleteItem: React.MouseEventHandler;
}

const AddedElement: React.FC<Props> = ({ name, count, onDeleteItem, price }) => {
  return (
    <div>
      <h3>{name}<span> x {count} {price} KGS</span></h3>
      <button type="button" onClick={onDeleteItem}></button>
    </div>
  );
};

export default AddedElement;