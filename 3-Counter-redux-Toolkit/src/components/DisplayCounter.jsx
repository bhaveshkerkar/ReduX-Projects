import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter); // Accessing the counter value from the Redux store

  return (
    <p className="lead mb-4">The current counter value is: {counterVal}</p>
  );
};

export default DisplayCounter;
