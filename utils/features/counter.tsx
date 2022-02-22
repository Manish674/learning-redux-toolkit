import { useGetPokemonByNameQuery } from "./apiSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  increment,
  incrementByValue,
  decrement,
  decrementByValue,
} from "./counterSlice";

const Counter = () => {
  const [valueToDec, setValueToDec] = useState<number>(0);
  const [valueToInc, setValueToInc] = useState<number>(0);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetPokemonByNameQuery("balbasaur");

  if (isLoading) return <div>.........loading....................</div>;
  if (data) return <div>found the shit</div>;
  if (error) return <div>shit happened</div>;

  return (
    <div>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <div>
        <input
          type="number"
          onChange={(e) => setValueToInc(e.target.value)}
          value={valueToInc}
        />
        <button onClick={() => dispatch(incrementByValue(valueToInc))}>
          inc by value
        </button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setValueToDec(e.target.value)}
          value={valueToDec}
        />
        <button onClick={() => dispatch(decrementByValue(valueToDec))}>
          dec by value
        </button>
      </div>
      {count}
    </div>
  );
};

export default Counter;
