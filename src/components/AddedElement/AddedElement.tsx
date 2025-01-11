interface Props {
  name: string;
  count: number;
  onDeleteItem: React.MouseEventHandler;
}

const AddedElement: React.FC<Props> = ({ name, count, onDeleteItem }) => {
  return (
    <div>
      <h3>{name}<span> x {count}</span></h3>
      <button type="button" onClick={onDeleteItem}></button>
    </div>
  );
};

export default AddedElement;