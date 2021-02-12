import './App.css';
import Header from "./components/header/Header";
import DataPerson from "./components/DataPerson/DataPerson";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="App">
        <Header/>
        <DataPerson name={'Daniil'}/>
        <Main/>
    </div>
  );
}

export default App;
