import "./TotalPrice.css"

interface Props {
  price: number
}

const TotalPrice: React.FC<Props> = ({ price }) => {
  return (
    <p className="totalPrice">Total Price: {price}</p>
  );
};

export default TotalPrice;