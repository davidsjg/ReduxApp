import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  function handleClick1() {
    dispatch(increment());
  }
  function handleClick2() {
    dispatch(decrement());
  }
  return (
    <>
      <h1>Counter {counter}</h1>
      {/* <button onClick={() => dispatch(increment()))}>+</button> */}
      <button onClick={handleClick1}>+</button>
      <button onClick={handleClick2}>-</button>

      {isLogged ? <h5>User is Logged In</h5> : <h5>User is not logged in</h5>}
    </>
  );
}

export default App;
