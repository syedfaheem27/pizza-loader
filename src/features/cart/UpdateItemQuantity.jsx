import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  getCartQuantityById,
} from './cartSlice';

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getCartQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-2 md:gap-2.5">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="font-semibold text-sm">{itemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
