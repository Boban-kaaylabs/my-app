import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { decrement, getData, increment } from "./store/FirstStore";

const Home = () => {
  const dispatch = useDispatch();

  const { count, mutatedtimes, loading, data } = useSelector(
    (states) => states.FIRST
  );
  return (
    <div>
      <button
        aria-label="Increment count"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement count"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button aria-label="Get Data" onClick={() => dispatch(getData())}>
        get the data
      </button>
      <Skeleton count={4} />
      result : {count}, times clicked : {mutatedtimes}
      {loading && <div>Loading bro...</div>}
      <ul>
        {data?.map((i) => (
          <li key={i.id}>{i.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
