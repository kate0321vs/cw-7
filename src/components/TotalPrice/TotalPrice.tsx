import * as React from 'react';

interface Props {
  price: number
}

const TotalPrice: React.FC<Props> = ({ price }) => {
  return (
    <p>Total Price: <strong>{price}</strong></p>
  );
};

export default TotalPrice;