import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { ordered, restocked } from "../../store/features/CakeSlice";

export const CakeView = () => {
  const numCake = useAppSelector((state) => state.cake.numOfCake);
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Cake - {numCake}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  );
};
