import './App.css';
import Info from "./Info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Chris" number={2}/>
      <AddItem text="Tim"/>
      <AddItem text="Joe"/>
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
