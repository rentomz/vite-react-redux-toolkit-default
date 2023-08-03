import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { fetchTest } from "../../store/actions/TestAction";

export const TestView = () => {
  const dispatch = useAppDispatch();
  const testValue = useAppSelector((state) => state.test);

  useEffect(() => {
    dispatch(fetchTest())
  }, []);
  return (
    <div>
      <h2>List Of Test-</h2>
      {testValue.loading && <div>Loading...</div>}
      {!testValue.loading && testValue.error ? <div>Error : {testValue.error} </div> : null}
      {!testValue.loading && testValue.tests?.length ? (
        <ul>
          {
            testValue.tests.map(user => (
              <li key={user.id}>{user.title}</li>
            ))
          }
        </ul>
      ) : null}
    </div>
  );
};
