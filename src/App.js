import './App.css';
import Info from "./Info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem/>
      <AddItem/>
      <AddItem/>
      <p>Test</p>
    </div>
  );
}



function AddItem(props) {
  const value = props.text;

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={value} id="text-form"/>
      <p>{props.number}</p>
    </form>
  )
}

export default App;
