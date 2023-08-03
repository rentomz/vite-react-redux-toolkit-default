import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { ordered, restocked } from "../../store/features/IceSlice";

export const IceView = () => {
  const [value, setValue] = useState(1);
  const numIce = useAppSelector((state) => state.ice.numOfIce);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of Ice - {numIce}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        name=""
        id=""
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Ice</button>
    </div>
  );
};
