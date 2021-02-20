import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initWeb3 } from "./store/adoptSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const web3 = useSelector((state) => {
    console.log("state = ", state)
    return state.adoptReducer.web3
  })

  useEffect(() => {
    dispatch(initWeb3())
  }, [])

  return (
    <div className="App">
      <h3>HelloWorld</h3>
    </div>
  );
}

export default App;
